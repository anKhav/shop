import {useState} from "react";

export const useAndShowUploadedImage = (e) => {
    e.preventDefault()
    const fileReader = new FileReader()

    const [selectedImgUrl, setSelectedImgUrl] = useState()
    const [image, setImage] = useState()

    fileReader.onloadend = () => {
        setSelectedImgUrl(fileReader.result)
    }

    console.log(selectedImgUrl)
    return setImage
}