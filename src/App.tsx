import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { API, Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import { imagesPath, izzysRestApi } from "./constants";

Amplify.configure(awsExports);

type MyImage = {
  name: string;
  type: string;
  data: string;
};

const uploadWithPresignedUrl = async (url: string, data: any) => {
  const upload = await fetch(url, {
    method: "PUT",
    body: data,
  });

  return upload;
};

const getPresignedUrls = async (count: number) => {
  const response = await API.get(izzysRestApi, `${imagesPath}/surls/${count}`, {
    headers: {
      "Content-Type": "application/json",
    },
    response: true,
  });

  return response.data.surls as string[];
};

const convertBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;
      const base64Data = result.split(",")[1];

      resolve({
        name: file.name,
        type: file.type,
        data: base64Data,
      } as MyImage);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

const upload = async (files: File[], mode: "client" | "server" = "server") => {
  switch (mode) {
    case "server":
      try {
        const encodedImages = (await Promise.all(
          files.map((file) => convertBase64(file))
        )) as MyImage[];

        console.log("encoded images:", encodedImages);

        const response = await API.post(izzysRestApi, imagesPath, {
          headers: {
            "Content-Type": "application/json",
          },
          response: true,
          body: { images: encodedImages },
        });

        console.log(response);

        // dev
        // const response = await fetch("http://localhost:3000/images", {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   method: "POST",
        //   body: JSON.stringify({ images: encodedImages }),
        // });
        // console.log(await response.json());
      } catch (e) {
        console.log(e);
      }
      break;

    case "client":
      const sUrls = await getPresignedUrls(files.length);

      for (let i = 0; i < files.length; i++) {
        const sUrl = sUrls[i];
        const file = files[i];

        const uploadResult = uploadWithPresignedUrl(
          sUrl,
          await file.arrayBuffer()
        );

        console.log("upload result:", (await uploadResult).status);
      }
      break;
  }
};

function App() {
  const [images, setImages] = useState<Array<File>>([]);

  console.log("images", images);

  const handleInputChange = (e: any) => {
    const selectedFiles: FileList = e.target.files;
    setImages(Array.from(selectedFiles));
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
      <h1>All about Images</h1>
      <div className="card">
        <button onClick={() => upload(images, "client")}>Upload</button>
      </div>

      <input
        type="file"
        name="images"
        id="images"
        accept="image/*"
        multiple
        ref={(input: any) => input && (input.value = null)}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />

      <p className="read-the-docs mt-20 text-left">selected files:</p>
      <ul className=" flex-col">
        {images.map((file: File) => {
          const objectUrl = URL.createObjectURL(file);
          const objectName = file.name;
          const objectType = file.type;

          return (
            <li
              key={objectName}
              className="mt-5 border-solid border-black border-2 p-2 rounded w-fit"
            >
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
