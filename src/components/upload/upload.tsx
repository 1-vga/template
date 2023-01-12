import React, { useState } from 'react';
import styles from './upload.module.scss';
import avatar from './images/photo.png';
import uploadImg from './images/uploadImg.svg';


interface Props {
    // setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Upload: React.FC<Props> = () => {

    // const handleBackdropClick = () => {
    //     setPopup(false);
    // }

    const [file, setFile] = React.useState('');
    const [text, setText] = React.useState('');


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
    </div>




}

export default Upload;