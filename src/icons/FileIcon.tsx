const FileIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.4189 15.732C21.4189 19.31 19.3099 21.419 15.7319 21.419H7.94988C4.36288 21.419 2.24988 19.31 2.24988 15.732V7.932C2.24988 4.359 3.56388 2.25 7.14288 2.25H9.14288C9.86088 2.251 10.5369 2.588 10.9669 3.163L11.8799 4.377C12.3119 4.951 12.9879 5.289 13.7059 5.29H16.5359C20.1229 5.29 21.4469 7.116 21.4469 10.767L21.4189 15.732Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.48096 14.4629H16.216"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FileIcon;
