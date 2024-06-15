import type { FC, SVGProps } from 'react';

// @todo: replace with original vector (https://github.com/Schniz/fnm/issues/798#issuecomment-2068220441)
//        this is a rough tracing of the available raster image
const FNM: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_9_63)">
      <path
        d="M1.335 29.3115C1.6927 20.3502 3.86906 17.6129 12.4625 18.1841L1.335 29.3115Z"
        fill="#FFA700"
      />
      <path
        d="M1.33445 29.3111C10.2957 28.9534 13.0331 26.7771 12.4619 18.1836L1.33445 29.3111Z"
        fill="#FFA700"
      />
      <circle cx="8.06134" cy="22.6108" r="3.34002" fill="#FFC920" />
      <path
        d="M8.06101 8.39001L12.0369 8.63409L7.99678 16.541C5.44038 15.0251 3.62263 14.4213 1.36169 14.2415L8.06101 8.39001Z"
        fill="#EC423C"
      />
      <path
        d="M1.36169 14.2415C5.11912 13.5681 7.43848 12.6734 12.0369 8.63416L7.99678 16.541C5.44038 15.0252 3.62263 14.4214 1.36169 14.2415Z"
        fill="black"
        fillOpacity="0.1"
      />
      <path
        d="M30.6523 0.00493863C25.904 0.00502983 3.51938 7.45518 8.66979 21.9874L30.6523 0.00493863Z"
        fill="#DAD5D4"
      />
      <path
        d="M30.6472 0.00728336C30.6471 4.75558 23.1969 27.1402 8.66469 21.9898L30.6472 0.00728336Z"
        fill="#DAD5D4"
      />
      <path
        d="M23.4046 2.61321L26.6702 1.70942L29.0319 4.07117L28.1281 7.33672L24.8626 8.24052L22.5008 5.87876L23.4046 2.61321Z"
        fill="#EC423C"
      />
      <path
        d="M7.25505 23.4488L14.5967 16.1072C14.2755 15.497 7.94876 20.6997 7.67899 21.0658C7.40922 21.4319 7.29288 22.2291 7.25505 23.4488Z"
        fill="#EC423C"
      />
      <path
        d="M7.25251 23.4459L14.5941 16.1042C15.2043 16.4254 10.0016 22.7522 9.63548 23.0219C9.26936 23.2917 8.47216 23.4081 7.25251 23.4459Z"
        fill="#EC423C"
      />
      <path
        d="M30.6472 0.00728336C30.6471 4.75558 23.1969 27.1402 8.66469 21.9898C14.4457 15.5825 21.7231 10.277 30.6472 0.00728336Z"
        fill="black"
        fillOpacity="0.1"
      />
      <mask
        id="path-12-outside-1_9_63"
        maskUnits="userSpaceOnUse"
        x="4.55376"
        y="9.34656"
        width="24.7487"
        height="24.7487"
        fill="black"
      >
        <rect
          fill="white"
          x="4.55376"
          y="9.34656"
          width="24.7487"
          height="24.7487"
        />
        <path d="M10.1695 22.4334C10.7254 21.8775 11.3141 21.4742 11.9354 21.2235L12.4177 22.4252C12.0308 22.5942 11.6683 22.8476 11.3304 23.1855C11.0742 23.4417 10.9353 23.6733 10.9135 23.8804C10.8971 24.0821 10.9952 24.2892 11.2078 24.5017L11.7882 25.0822L13.2025 23.6679L13.9547 24.7143L12.6875 25.9815L15.8595 29.1535L14.576 30.437L11.404 27.265L10.4883 28.1806L9.58906 27.2814L10.5047 26.3657L9.88337 25.7444C9.43646 25.2975 9.22935 24.7797 9.26205 24.1911C9.29475 23.5916 9.59724 23.0057 10.1695 22.4334ZM13.1912 23.1397L14.3194 22.0115L14.908 22.4202C14.8862 22.006 14.9298 21.6409 15.0388 21.3248C15.1478 20.9977 15.3386 20.698 15.6111 20.4255C15.9871 20.0494 16.3932 19.8723 16.8292 19.8941C17.2707 19.9104 17.6958 20.123 18.1045 20.5317L21.2929 23.7201L20.0012 25.0118L17.1889 22.1995C16.9164 21.927 16.6984 21.7689 16.5349 21.7253C16.3714 21.6817 16.2106 21.739 16.0525 21.897C15.9217 22.0278 15.8372 22.1995 15.7991 22.4121C15.7609 22.6137 15.7582 22.8617 15.7909 23.156L18.824 26.1891L17.5323 27.4808L13.1912 23.1397ZM20.9136 15.1229C21.2243 14.8122 21.554 14.6896 21.9029 14.755C22.2517 14.8095 22.6468 15.0575 23.0883 15.499L26.3012 18.7118L25.1975 19.8155L22.1318 16.7498C21.9737 16.5917 21.8484 16.4991 21.7557 16.4718C21.6685 16.4391 21.584 16.4636 21.5023 16.5454C21.3497 16.698 21.2952 16.9433 21.3388 17.2812L24.5353 20.4777L23.6197 21.3933L20.5539 18.3276C20.3959 18.1696 20.2705 18.0769 20.1779 18.0496C20.0907 18.0169 20.0062 18.0415 19.9244 18.1232C19.7718 18.2758 19.7173 18.5211 19.7609 18.859L22.9575 22.0555L21.8375 23.1756L17.4964 18.8345L18.4365 17.8943L18.9434 18.2213C18.8889 17.8834 18.8862 17.6027 18.9352 17.3793C18.9843 17.1449 19.1015 16.9351 19.2868 16.7498C19.4557 16.5808 19.641 16.4827 19.8427 16.4555C20.0389 16.4228 20.2487 16.4691 20.4722 16.5944C20.4231 15.9568 20.5703 15.4663 20.9136 15.1229Z" />
      </mask>
      <path
        d="M10.1695 22.4334C10.7254 21.8775 11.3141 21.4742 11.9354 21.2235L12.4177 22.4252C12.0308 22.5942 11.6683 22.8476 11.3304 23.1855C11.0742 23.4417 10.9353 23.6733 10.9135 23.8804C10.8971 24.0821 10.9952 24.2892 11.2078 24.5017L11.7882 25.0822L13.2025 23.6679L13.9547 24.7143L12.6875 25.9815L15.8595 29.1535L14.576 30.437L11.404 27.265L10.4883 28.1806L9.58906 27.2814L10.5047 26.3657L9.88337 25.7444C9.43646 25.2975 9.22935 24.7797 9.26205 24.1911C9.29475 23.5916 9.59724 23.0057 10.1695 22.4334ZM13.1912 23.1397L14.3194 22.0115L14.908 22.4202C14.8862 22.006 14.9298 21.6409 15.0388 21.3248C15.1478 20.9977 15.3386 20.698 15.6111 20.4255C15.9871 20.0494 16.3932 19.8723 16.8292 19.8941C17.2707 19.9104 17.6958 20.123 18.1045 20.5317L21.2929 23.7201L20.0012 25.0118L17.1889 22.1995C16.9164 21.927 16.6984 21.7689 16.5349 21.7253C16.3714 21.6817 16.2106 21.739 16.0525 21.897C15.9217 22.0278 15.8372 22.1995 15.7991 22.4121C15.7609 22.6137 15.7582 22.8617 15.7909 23.156L18.824 26.1891L17.5323 27.4808L13.1912 23.1397ZM20.9136 15.1229C21.2243 14.8122 21.554 14.6896 21.9029 14.755C22.2517 14.8095 22.6468 15.0575 23.0883 15.499L26.3012 18.7118L25.1975 19.8155L22.1318 16.7498C21.9737 16.5917 21.8484 16.4991 21.7557 16.4718C21.6685 16.4391 21.584 16.4636 21.5023 16.5454C21.3497 16.698 21.2952 16.9433 21.3388 17.2812L24.5353 20.4777L23.6197 21.3933L20.5539 18.3276C20.3959 18.1696 20.2705 18.0769 20.1779 18.0496C20.0907 18.0169 20.0062 18.0415 19.9244 18.1232C19.7718 18.2758 19.7173 18.5211 19.7609 18.859L22.9575 22.0555L21.8375 23.1756L17.4964 18.8345L18.4365 17.8943L18.9434 18.2213C18.8889 17.8834 18.8862 17.6027 18.9352 17.3793C18.9843 17.1449 19.1015 16.9351 19.2868 16.7498C19.4557 16.5808 19.641 16.4827 19.8427 16.4555C20.0389 16.4228 20.2487 16.4691 20.4722 16.5944C20.4231 15.9568 20.5703 15.4663 20.9136 15.1229Z"
        fill="#FFA700"
      />
      <path
        d="M11.9354 21.2235L13.4852 20.6014L12.862 19.0487L11.3105 19.6748L11.9354 21.2235ZM12.4177 22.4252L13.086 23.9557L14.5712 23.3072L13.9676 21.8032L12.4177 22.4252ZM10.9135 23.8804L9.25262 23.7056L9.25053 23.7255L9.24891 23.7455L10.9135 23.8804ZM11.7882 25.0822L10.6073 26.2631L11.7882 27.4439L12.9691 26.2631L11.7882 25.0822ZM13.2025 23.6679L14.5586 22.6932L13.4115 21.0972L12.0217 22.487L13.2025 23.6679ZM13.9547 24.7143L15.1355 25.8952L16.1389 24.8918L15.3107 23.7396L13.9547 24.7143ZM12.6875 25.9815L11.5066 24.8006L10.3257 25.9815L11.5066 27.1624L12.6875 25.9815ZM15.8595 29.1535L17.0404 30.3344L18.2213 29.1535L17.0404 27.9726L15.8595 29.1535ZM14.576 30.437L13.3951 31.6179L14.576 32.7988L15.7569 31.6179L14.576 30.437ZM11.404 27.265L12.5849 26.0841L11.404 24.9032L10.2231 26.0841L11.404 27.265ZM10.4883 28.1806L9.30747 29.3615L10.4883 30.5424L11.6692 29.3615L10.4883 28.1806ZM9.58906 27.2814L8.40818 26.1005L7.22731 27.2814L8.40818 28.4622L9.58906 27.2814ZM10.5047 26.3657L11.6856 27.5466L12.8664 26.3657L11.6856 25.1848L10.5047 26.3657ZM9.26205 24.1911L10.9295 24.2837L10.9296 24.282L9.26205 24.1911ZM11.3504 23.6143C11.7747 23.1899 12.18 22.9256 12.5603 22.7721L11.3105 19.6748C10.4481 20.0227 9.67612 20.565 8.98863 21.2525L11.3504 23.6143ZM10.3855 21.8455L10.8679 23.0473L13.9676 21.8032L13.4852 20.6014L10.3855 21.8455ZM11.7495 20.8947C11.1478 21.1575 10.6157 21.5385 10.1495 22.0046L12.5113 24.3664C12.721 24.1567 12.9137 24.0309 13.086 23.9557L11.7495 20.8947ZM10.1495 22.0046C9.80318 22.351 9.33483 22.9247 9.25262 23.7056L12.5743 24.0553C12.5533 24.2545 12.4861 24.3772 12.4661 24.4106C12.4461 24.4438 12.4492 24.4285 12.5113 24.3664L10.1495 22.0046ZM9.24891 23.7455C9.17686 24.6341 9.63926 25.295 10.0269 25.6826L12.3886 23.3209C12.3512 23.2834 12.6174 23.5301 12.578 24.0154L9.24891 23.7455ZM10.0269 25.6826L10.6073 26.2631L12.9691 23.9013L12.3886 23.3209L10.0269 25.6826ZM12.9691 26.2631L14.3834 24.8487L12.0217 22.487L10.6073 23.9013L12.9691 26.2631ZM11.8465 24.6425L12.5986 25.689L15.3107 23.7396L14.5586 22.6932L11.8465 24.6425ZM12.7738 23.5334L11.5066 24.8006L13.8684 27.1624L15.1355 25.8952L12.7738 23.5334ZM11.5066 27.1624L14.6786 30.3344L17.0404 27.9726L13.8684 24.8006L11.5066 27.1624ZM14.6786 27.9726L13.3951 29.2561L15.7569 31.6179L17.0404 30.3344L14.6786 27.9726ZM15.7569 29.2561L12.5849 26.0841L10.2231 28.4459L13.3951 31.6179L15.7569 29.2561ZM10.2231 26.0841L9.30747 26.9998L11.6692 29.3615L12.5849 28.4459L10.2231 26.0841ZM11.6692 26.9998L10.7699 26.1005L8.40818 28.4622L9.30747 29.3615L11.6692 26.9998ZM10.7699 28.4622L11.6856 27.5466L9.32382 25.1848L8.40818 26.1005L10.7699 28.4622ZM11.6856 25.1848L11.0642 24.5635L8.7025 26.9253L9.32382 27.5466L11.6856 25.1848ZM11.0642 24.5635C10.926 24.4253 10.9252 24.3607 10.9295 24.2837L7.59461 24.0985C7.53348 25.1987 7.94691 26.1697 8.7025 26.9253L11.0642 24.5635ZM10.9296 24.282C10.9331 24.2182 10.9666 23.9981 11.3504 23.6143L8.98863 21.2525C8.22791 22.0132 7.65643 22.965 7.59452 24.1001L10.9296 24.282ZM13.1912 23.1397L12.0103 21.9588L10.8294 23.1397L12.0103 24.3205L13.1912 23.1397ZM14.3194 22.0115L15.2719 20.6398L14.1255 19.8436L13.1385 20.8306L14.3194 22.0115ZM14.908 22.4202L13.9554 23.7919L16.7548 25.736L16.5757 22.3325L14.908 22.4202ZM15.0388 21.3248L16.6176 21.8692L16.6204 21.861L16.6231 21.8529L15.0388 21.3248ZM16.8292 19.8941L16.7458 21.562L16.7566 21.5625L16.7674 21.5629L16.8292 19.8941ZM21.2929 23.7201L22.4738 24.901L23.6547 23.7201L22.4738 22.5392L21.2929 23.7201ZM20.0012 25.0118L18.8203 26.1927L20.0012 27.3736L21.1821 26.1927L20.0012 25.0118ZM16.5349 21.7253L16.9652 20.1117L16.9652 20.1117L16.5349 21.7253ZM15.7991 22.4121L17.44 22.7225L17.4415 22.7148L17.4428 22.7071L15.7991 22.4121ZM15.7909 23.156L14.1311 23.3404L14.1958 23.9227L14.61 24.3369L15.7909 23.156ZM18.824 26.1891L20.0048 27.3699L21.1857 26.1891L20.0048 25.0082L18.824 26.1891ZM17.5323 27.4808L16.3514 28.6616L17.5323 29.8425L18.7131 28.6616L17.5323 27.4808ZM14.3721 24.3205L15.5002 23.1924L13.1385 20.8306L12.0103 21.9588L14.3721 24.3205ZM13.3668 23.3832L13.9554 23.7919L15.8606 21.0485L15.2719 20.6398L13.3668 23.3832ZM16.5757 22.3325C16.5626 22.0829 16.5932 21.9398 16.6176 21.8692L13.46 20.7803C13.2664 21.3419 13.2098 21.9292 13.2403 22.508L16.5757 22.3325ZM16.6231 21.8529C16.6409 21.7996 16.6809 21.7174 16.7919 21.6063L14.4302 19.2446C13.9962 19.6786 13.6547 20.1959 13.4545 20.7966L16.6231 21.8529ZM16.7919 21.6063C16.8612 21.5371 16.888 21.5314 16.8654 21.5413C16.854 21.5462 16.8352 21.5528 16.8107 21.5573C16.7862 21.5619 16.7636 21.5629 16.7458 21.562L16.9126 18.2261C15.9043 18.1757 15.0611 18.6137 14.4302 19.2446L16.7919 21.6063ZM16.7674 21.5629C16.7322 21.5616 16.7165 21.5516 16.7323 21.5595C16.7539 21.5703 16.8197 21.6087 16.9237 21.7126L19.2854 19.3509C18.6732 18.7386 17.8706 18.2615 16.891 18.2252L16.7674 21.5629ZM16.9237 21.7126L20.112 24.901L22.4738 22.5392L19.2854 19.3509L16.9237 21.7126ZM20.112 22.5392L18.8203 23.8309L21.1821 26.1927L22.4738 24.901L20.112 22.5392ZM21.1821 23.8309L18.3698 21.0186L16.008 23.3804L18.8203 26.1927L21.1821 23.8309ZM18.3698 21.0186C18.0922 20.7411 17.5995 20.2809 16.9652 20.1117L16.1046 23.339C16.0488 23.3241 16.0031 23.3077 15.9683 23.2935C15.9333 23.2792 15.9062 23.2659 15.8873 23.256C15.851 23.2368 15.835 23.2245 15.8408 23.2286C15.8456 23.2322 15.8629 23.2452 15.8931 23.2717C15.9228 23.2978 15.9611 23.3334 16.008 23.3804L18.3698 21.0186ZM16.9652 20.1117C16.0421 19.8656 15.2967 20.2911 14.8717 20.7161L17.2334 23.0779C17.1892 23.1221 17.0654 23.2328 16.8517 23.3089C16.6165 23.3926 16.3524 23.405 16.1046 23.339L16.9652 20.1117ZM14.8717 20.7161C14.4613 21.1265 14.2434 21.6266 14.1554 22.117L17.4428 22.7071C17.4378 22.7349 17.4243 22.7905 17.3895 22.8612C17.3537 22.9339 17.3019 23.0094 17.2334 23.0779L14.8717 20.7161ZM14.1582 22.1016C14.0788 22.521 14.0875 22.9475 14.1311 23.3404L17.4507 22.9716C17.4405 22.8793 17.4379 22.8124 17.4384 22.7676C17.4389 22.7222 17.4424 22.7096 17.44 22.7225L14.1582 22.1016ZM14.61 24.3369L17.6431 27.3699L20.0048 25.0082L16.9718 21.9751L14.61 24.3369ZM17.6431 25.0082L16.3514 26.2999L18.7131 28.6616L20.0048 27.3699L17.6431 25.0082ZM18.7131 26.2999L14.3721 21.9588L12.0103 24.3205L16.3514 28.6616L18.7131 26.2999ZM21.9029 14.755L21.5951 16.3964L21.62 16.4011L21.645 16.405L21.9029 14.755ZM26.3012 18.7118L27.482 19.8927L28.6629 18.7118L27.482 17.531L26.3012 18.7118ZM25.1975 19.8155L24.0166 20.9964L25.1975 22.1773L26.3784 20.9964L25.1975 19.8155ZM21.7557 16.4718L21.1693 18.0355L21.2262 18.0568L21.2845 18.074L21.7557 16.4718ZM21.3388 17.2812L19.6825 17.4949L19.7553 18.0595L20.1579 18.462L21.3388 17.2812ZM24.5353 20.4777L25.7162 21.6586L26.8971 20.4777L25.7162 19.2968L24.5353 20.4777ZM23.6197 21.3933L22.4388 22.5742L23.6197 23.7551L24.8005 22.5742L23.6197 21.3933ZM20.1779 18.0496L19.5915 19.6133L19.6484 19.6347L19.7066 19.6518L20.1779 18.0496ZM19.7609 18.859L18.1046 19.0727L18.1775 19.6373L18.58 20.0399L19.7609 18.859ZM22.9575 22.0555L24.1383 23.2364L25.3192 22.0555L24.1383 20.8747L22.9575 22.0555ZM21.8375 23.1756L20.6566 24.3564L21.8375 25.5373L23.0183 24.3564L21.8375 23.1756ZM17.4964 18.8345L16.3155 17.6536L15.1346 18.8345L16.3155 20.0154L17.4964 18.8345ZM18.4365 17.8943L19.3419 16.491L18.209 15.7601L17.2556 16.7134L18.4365 17.8943ZM18.9434 18.2213L18.038 19.6246L21.1892 21.6577L20.5921 17.9554L18.9434 18.2213ZM18.9352 17.3793L20.5664 17.7373L20.5681 17.7294L20.5698 17.7214L18.9352 17.3793ZM19.8427 16.4555L20.0663 18.1104L20.0918 18.107L20.1172 18.1028L19.8427 16.4555ZM20.4722 16.5944L19.6551 18.0509L22.3766 19.5776L22.1373 16.4664L20.4722 16.5944ZM22.0945 16.3038C22.1212 16.2771 22.0847 16.3228 21.9761 16.3632C21.8541 16.4086 21.716 16.4191 21.5951 16.3964L22.2106 13.1136C21.1888 12.922 20.3282 13.3465 19.7328 13.942L22.0945 16.3038ZM21.645 16.405C21.5362 16.388 21.5088 16.356 21.5731 16.3964C21.6357 16.4357 21.7475 16.52 21.9074 16.6798L24.2691 14.3181C23.7474 13.7963 23.0388 13.2422 22.1607 13.105L21.645 16.405ZM21.9074 16.6798L25.1203 19.8927L27.482 17.531L24.2691 14.3181L21.9074 16.6798ZM25.1203 17.531L24.0166 18.6346L26.3784 20.9964L27.482 19.8927L25.1203 17.531ZM26.3784 18.6346L23.3126 15.5689L20.9509 17.9307L24.0166 20.9964L26.3784 18.6346ZM23.3126 15.5689C23.1528 15.4091 22.7656 15.0281 22.2269 14.8697L21.2845 18.074C21.1642 18.0386 21.0765 17.9953 21.0265 17.9678C20.9747 17.9393 20.9408 17.9153 20.9266 17.9047C20.9008 17.8857 20.9076 17.8874 20.9509 17.9307L23.3126 15.5689ZM22.3421 14.9081C21.9824 14.7733 21.5704 14.7431 21.1613 14.8619C20.7771 14.9734 20.5007 15.1852 20.3214 15.3645L22.6831 17.7263C22.5856 17.8239 22.3923 17.9824 22.0926 18.0695C21.7679 18.1637 21.4418 18.1377 21.1693 18.0355L22.3421 14.9081ZM20.3214 15.3645C19.6319 16.054 19.6113 16.9435 19.6825 17.4949L22.995 17.0675C22.9898 17.0267 23.0039 17.0856 22.9772 17.2061C22.9471 17.3416 22.8663 17.5432 22.6831 17.7263L20.3214 15.3645ZM20.1579 18.462L23.3544 21.6586L25.7162 19.2968L22.5196 16.1003L20.1579 18.462ZM23.3544 19.2968L22.4388 20.2125L24.8005 22.5742L25.7162 21.6586L23.3544 19.2968ZM24.8005 20.2125L21.7348 17.1467L19.3731 19.5085L22.4388 22.5742L24.8005 20.2125ZM21.7348 17.1467C21.575 16.9869 21.1877 16.6059 20.6491 16.4475L19.7066 19.6518C19.5863 19.6164 19.4987 19.5731 19.4487 19.5456C19.3968 19.5171 19.363 19.4931 19.3487 19.4826C19.323 19.4635 19.3298 19.4652 19.3731 19.5085L21.7348 17.1467ZM20.7642 16.486C20.4046 16.3511 19.9926 16.321 19.5835 16.4397C19.1993 16.5513 18.9229 16.763 18.7436 16.9423L21.1053 19.3041C21.0077 19.4017 20.8145 19.5603 20.5147 19.6473C20.1901 19.7416 19.8639 19.7155 19.5915 19.6133L20.7642 16.486ZM18.7436 16.9423C18.054 17.6319 18.0335 18.5214 18.1046 19.0727L21.4172 18.6453C21.4119 18.6045 21.4261 18.6635 21.3993 18.7839C21.3692 18.9194 21.2884 19.121 21.1053 19.3041L18.7436 16.9423ZM18.58 20.0399L21.7766 23.2364L24.1383 20.8747L20.9418 17.6781L18.58 20.0399ZM21.7766 20.8747L20.6566 21.9947L23.0183 24.3564L24.1383 23.2364L21.7766 20.8747ZM23.0183 21.9947L18.6772 17.6536L16.3155 20.0154L20.6566 24.3564L23.0183 21.9947ZM18.6772 20.0154L19.6174 19.0752L17.2556 16.7134L16.3155 17.6536L18.6772 20.0154ZM17.5312 19.2976L18.038 19.6246L19.8488 16.818L19.3419 16.491L17.5312 19.2976ZM20.5921 17.9554C20.5754 17.8518 20.5708 17.7821 20.5704 17.7412C20.57 17.6994 20.5741 17.7022 20.5664 17.7373L17.304 17.0212C17.1934 17.5251 17.2218 18.035 17.2947 18.4873L20.5921 17.9554ZM20.5698 17.7214C20.5596 17.7702 20.5414 17.8183 20.518 17.8604C20.495 17.9014 20.4741 17.9242 20.4676 17.9307L18.1059 15.5689C17.7136 15.9612 17.4224 16.4552 17.3006 17.0372L20.5698 17.7214ZM20.4676 17.9307C20.4505 17.9478 20.4072 17.9866 20.3338 18.0254C20.2579 18.0656 20.1664 18.0969 20.0663 18.1104L19.619 14.8005C18.9946 14.8849 18.4867 15.1881 18.1059 15.5689L20.4676 17.9307ZM20.1172 18.1028C19.8419 18.1486 19.6664 18.0573 19.6551 18.0509L21.2892 15.138C20.831 14.8809 20.2358 14.6969 19.5681 14.8082L20.1172 18.1028ZM22.1373 16.4664C22.1247 16.3034 22.1435 16.2343 22.1453 16.2282C22.1459 16.2263 22.1428 16.237 22.1323 16.2547C22.1217 16.2729 22.1083 16.29 22.0945 16.3038L19.7328 13.942C18.9433 14.7315 18.7333 15.7628 18.8071 16.7225L22.1373 16.4664Z"
        fill="white"
        mask="url(#path-12-outside-1_9_63)"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_63">
        <rect
          width="29.3408"
          height="32"
          fill="white"
          transform="translate(1.32959)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default FNM;
