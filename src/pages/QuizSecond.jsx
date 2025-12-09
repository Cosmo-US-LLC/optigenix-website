import React from 'react'

const QuizSecond = () => {
  return (
    <>
      <iframe
        src="/quiz/index.html"
        style={{ width: "100%", border: "none" }}
        className='md:min-h-[calc(100vh)] min-h-[calc(100vh)]'
      />
    </>
  )
}

export default QuizSecond