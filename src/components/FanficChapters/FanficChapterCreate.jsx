import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';

const FanficChapterCreate = () => {
  const { id } = useParams();
  const { addChapter } = useContext(fanficContext)

  const [chapter, setChapter] = useState("");
  const [text, setText] = useState("");


  const handleAddChapter = () => {
    const newPage = new FormData();

    newPage.append("chapter", chapter);
    newPage.append("text", text);

    addChapter(newPage, id);
  }

  // Функция добавляет "\n" в строку по нажатию на Enter
  function setChapterText(e) {
    setText(e.target.value)

    document.addEventListener("keydown", (event) => {
      if (event.code == 'Enter') {

        let backslash = `\\n`;

        setText(text + backslash)
      }
    })

  }


  return (
    <>
      <input className='add-chapter' type="text" placeholder='chapter-name' value={chapter} onChange={(e) => setChapter(e.target.value)} />
      <input className='add-chapter-text' type="text" placeholder='text' value={text} onChange={(e) => setChapterText(e)} />
      <button className='btn-add-chapter' onClick={handleAddChapter}Д>
        <span>ADD</span>
        </button>
    </>
  );
};

export default FanficChapterCreate;