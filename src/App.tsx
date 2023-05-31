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
  console.log("files", files);

  const handleUpload = (newImages: string[]) => {
    setImages([...images, ...newImages]);
  };

  const handleInputChange = (e: any) => {
    const selectedFiles: FileList = e.target.files;
    setFiles(Array.from(selectedFiles));

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
      <div className="flex justify-between">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => upload([])}>Upload</button>
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

      <p className="read-the-docs mt-20 text-left">selected files:</p>
      <ul className=" flex-col">
        {files.map((file: File) => {
          const objectUrl = URL.createObjectURL(file);
          const objectName = file.name;
          const objectType = file.type;

          return (
            <li className="mt-5 border-solid border-black border-2 p-2 rounded w-fit">
              <p className="text-left">{`${objectName}, ${objectType}`}</p>
              <div className="w-[230px] h-[120px]">
                <img
                  src={objectUrl}
                  alt={objectName}
                  className="h-full w-full object-cover "
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
