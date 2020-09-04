// 用于下载
const downloadFileByUrl = ({ url, fileName }) => {
  if ('download' in document.createElement('a')) {
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = url;
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href);
    document.body.removeChild(elink);
  } else { // IE10+下载
    navigator.msSaveBlob(url, fileName);
  }
};
