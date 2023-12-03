export function ModalResume() {
  return (
    <dialog id="resume_modal" className="modal">
      <div className="modal-box dark:bg-gray-800 bg-gray-200 text-center">
        <h3 className="font-bold text-lg dark:text-gray-300 py-4">Which file do you want to download?</h3>
        <div className="flex py-6 flex-wrap justify-between gap-4 px-6">
          <button
            className="flex-1 mx-4 hover:bg-gradient-to-r from-pink-500  to-red-500 dark:text-white py-2 rounded-md text-sm border border-pink-500"
            onClick={()=>{
              window.open('https://firebasestorage.googleapis.com/v0/b/me-dashboard-4830a.appspot.com/o/Resume%20Husnul%201.pdf?alt=media');
            }}
          >
            PDF
          </button>
          <button
            className="flex-1 mx-4 hover:bg-gradient-to-r from-cyan-500  to-blue-500 dark:text-white py-2 rounded-md text-sm border border-cyan-500"
            onClick={()=>{
              window.open('https://firebasestorage.googleapis.com/v0/b/me-dashboard-4830a.appspot.com/o/Resume%20Husnul%201.docx?alt=media');
            }}
          >
            WORD
          </button>
        </div>
        <p className="py-4 dark:text-gray-500">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}