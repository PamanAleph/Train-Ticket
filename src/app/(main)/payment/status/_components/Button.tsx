"use client"
function Button() {
const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "data:text/plain;charset=utf-8," + encodeURIComponent("Invoice data");
    downloadLink.download = "invoice.txt";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <button onClick={handleDownload}>
            <div className="flex gap-5 border py-2 px-10 rounded-xl bg-[#FAFAFA] text-[#2596D7]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.71875 8.59375L10 11.875L13.2812 8.59375"
                  stroke="#2596D7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 3.125V11.875"
                  stroke="#2596D7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875"
                  stroke="#2596D7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Download Invoice</p>
            </div>
          </button>
  )
}

export default Button