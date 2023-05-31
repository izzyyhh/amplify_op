import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { API, Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import { imagesPath, izzysRestApi } from "./constants";

Amplify.configure(awsExports);

const upload = async (images: File[]) => {
  try {
    // const response = await API.post(izzysRestApi, imagesPath, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   response: true,
    //   body: { amk: "amk" },
    // });

    const response = await fetch("http://localhost:3000/images", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ dei: "mum" }),
    });
    console.log(await response.json());
  } catch (e) {
    console.log(e);
  }
};

// try {
//   // const response = await API.post(izzysRestApi, imagesPath, {
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   response: true,
//   //   body: { amk: "amk" },
//   // });

//   const response = await fetch("http://localhost:3000/images", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({ dei: "mum" }),
//   });
//   console.log(await response.json());
// } catch (e) {
//   console.log(e);
// }

export const imageChange = async (newImages: Blob[]) => {
  const newImageUrls: string[] = await Promise.all(
    newImages.map(async (image: Blob) => {
      // if (image.type === 'image/heic') {
      // 	return convertToHeic(image);
      // } else {
      // 	return URL.createObjectURL(image);
      // }

      // fix skip heic
      if (image.type !== "image/heic") {
        return URL.createObjectURL(image);
      }
      return "";
    })
  );
  return newImageUrls.filter((url) => url !== "");
};

function App() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState<Array<any>>([]);
  const [files, setFiles] = useState<Array<File>>([]);

  const handleUpload = (newImages: string[]) => {
    setImages([...images, ...newImages]);
  };

  const handleInputChange = (e: any) => {
    const selectedFiles: FileList = e.target.files;
    const reader = new FileReader();

    for (let i = 0; i < selectedFiles.length; i++) {
      console.log(selectedFiles.item(i));
      reader.readAsDataURL(selectedFiles.item(i) as File);
      console.log(
        "object url",
        URL.createObjectURL(selectedFiles.item(i) as File)
      );
    }

    reader.onload = () => {
      console.log("reader", reader.result);
    };

    if (e.target.files) {
      imageChange(Array.from(e.target.files)).then((newUrls) => {
        handleUpload(newUrls);
      });
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <input
        type="file"
        name="images"
        id="images"
        multiple
        ref={(input: any) => input && (input.value = null)}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />

      <p className="read-the-docs">selected files:</p>
      <ul className=" flex-col">
        <li className="w-[200px] h-[100px]">
          {" sikter "}
          <img
            src="https://c8.alamy.com/compde/khg386/bunten-baumen-am-ufer-des-patricia-lake-im-jasper-national-park-mit-pyramide-berg-im-hintergrund-die-ruhige-see-spiegelt-einen-spiegel-imag-khg386.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </li>
      </ul>
    </div>
  );
}

export default App;
