import {Bounce, toast} from "react-toastify";

function useNotify(notificationText) {
  const notify = () => toast.warn(notificationText, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  })
  return [notify]
}

export default useNotify;