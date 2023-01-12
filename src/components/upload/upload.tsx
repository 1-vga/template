import React, { useState } from 'react';
import styles from './upload.module.scss';
import avatar from './images/avatar.svg';
import uploadImg from './images/uploadImg.svg';
import { v4 as uuidv4 } from "uuid";


interface Props {
    // setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Upload: React.FC<Props> = () => {

<<<<<<< HEAD
    // const handleBackdropClick = () => {
    //     setPopup(false);
    // }

    const [file, setFile] = React.useState('');
    const [text, setText] = React.useState('');

=======
    const [file, setFile] = React.useState<{
        id: string;
        path: string;
        file: File;
    } | null>(null);
    const [text, setText] = React.useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileContent = event.target.files;
        if (fileContent) {
            const preparedFile = {
                id: uuidv4(),
                path: URL.createObjectURL(fileContent[0]),
                file: fileContent[0],
            };
            setFile(preparedFile);
        }
    }
>>>>>>> 0c8c53b6dc1623041b5333309beedd6f7d69c8fb

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(file, text);
    };
    return <div className={styles.resultPopup}>
        <div className={styles.backdrop}>
            <div className={styles.container}>
                <div className={styles.titleBox}>
                    <div className={styles.uploadTitle}>
                        Upload Test Result
                    </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.infoBox}>
                    <div className={styles.patientInfo}>
                        <div className={styles.photoImg}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={styles.patientInfoCol}>
                            <div className={styles.title}>Theresa Webb</div>
                            <div className={styles.pcrTest}>PCR Test</div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={styles.uploadForm}>
                    <label className={styles.file}>
                        <input
                            type="file" multiple
                            className={styles.inputField}
                            value={file}
                            onChange={(e) => setFile(e.target.value)}
                        />
                        <div className={styles.labelFile}>
                            <div className={styles.fileTitle}>Upload document</div>
                            <div className={styles.fileImg}><img src={uploadImg} alt="uploadImg" /></div>
                        </div>
                    </label>
                    <textarea className={styles.textareaForm} placeholder="Leave a message..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <div className={styles.btnRow}>
                        <div className={styles.btnLeft}> <button type='submit' className={styles.subscribeBtn}>Upload test result</button></div>
                        <div className={styles.btnRigt}> <button type='submit' className={styles.subscribeBtn}>Cancel </button></div>
                    </div>
                </form>
            </div>
        </div>
<<<<<<< HEAD
    </div>




=======
        <div className={styles.border}></div>
        <div className={styles.infoBox}>
            <div className={styles.patientInfo}>
                <div className={styles.photoImg}>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className={styles.patientInfoCol}>
                    <div className={styles.title}>Theresa Webb</div>
                    <div className={styles.pcrTest}>PCR Test</div>
                </div>
            </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.uploadForm}>
            <label className={styles.file}>
                <input
                    type="file" multiple
                    className={styles.inputField}
                    onChange={handleFileChange}
                />
                <div className={styles.labelFile}>
                    <div className={styles.fileTitle}>Upload document</div>
                    <div className={styles.fileImg}><img src={uploadImg} alt="uploadImg" /></div>
                </div>
            </label>
            <textarea
                className={styles.textareaForm}
                placeholder="Leave a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className={styles.btnRow}>
                <div className={styles.btnLeft}> <button type='submit' className={styles.subscribeBtn}>Upload test result</button></div>
                <div className={styles.btnRigt}> <button type='submit' className={styles.subscribeBtn}>Cancel </button></div>
            </div>
        </form>
    </div>
>>>>>>> 0c8c53b6dc1623041b5333309beedd6f7d69c8fb
}

export default Upload;