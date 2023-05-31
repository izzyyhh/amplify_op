import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { API, Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import { imagesPath, izzysRestApi } from "./constants";

Amplify.configure(awsExports);

try {
  const response = await API.post(izzysRestApi, imagesPath, {
    headers: {
      "Content-Type": "application/json",
    },
    response: true,
    body: { amk: "amk" },
  });
  console.log(response);
} catch (e) {
  console.log(e);
}

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

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
