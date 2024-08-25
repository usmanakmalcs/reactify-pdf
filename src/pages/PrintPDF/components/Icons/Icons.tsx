import React from 'react';

export const ICON_VARIANT_TYPE = {
  EDIT: 'edit',
  Signature: 'Signature',
  Initials: 'Initials',
  TextBox: 'TextBox',
  CheckBox: 'CheckBox',
  FullName: 'FullName',
  Currency: 'Currency',
  PhoneNumber: 'PhoneNumber',
  DateSigned: 'DateSigned',
  Number: 'Number',
  DoubleArrow: 'DoubleArrow',
  User: 'User',
  Address: 'Address',
  StrikeThrough: 'StrikeThrough',
  Arrow: 'Arrow',
  UpArrow: 'UpArrow',
  DownArrow: 'DownArrow',
  File: 'File',
  Checked: 'Checked',
  Required: 'Required',
  AllUsers: 'AllUsers',
  Date: 'Date',
  Copy: 'Copy',
  Delete: 'Delete',
  Dots: 'Dots',
  FileBundle: 'FileBundle',
  DragDots: 'DragDots',
  GrayFile: 'GrayFile',
  Preview: 'Preview',
  Pencil: 'Pencil',
  Trash: 'Trash',
  MenuDotsBg: 'MenuDotsBg',
  Document: 'Document',
  LineThickness: 'LineThickness',
  SuccessTick: 'SuccessTick',
  Download: 'Download',
  Cross: 'Cross',
} as const;

type IconVariant = typeof ICON_VARIANT_TYPE[keyof typeof ICON_VARIANT_TYPE];

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: IconVariant;
  color?: string;
}

export const Icons = ({ variant, color, ...props }: IconsProps) => {
  const getIcons = () => {
    switch (variant) {
      case ICON_VARIANT_TYPE.EDIT: {
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <circle cx="16" cy="16" r="16" fill="white" />
            <path
              d="M10 22H13.1314L21.3515 13.78C21.7667 13.3647 22 12.8015 22 12.2143C22 11.627 21.7667 11.0638 21.3515 10.6485C20.9362 10.2333 20.373 10 19.7857 10C19.1985 10 18.6353 10.2333 18.22 10.6485L10 18.8686V22Z"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.4368 11.4319L20.5682 14.5634"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Required: {
        return (
          // <svg
          //   width="20"
          //   height="20"
          //   viewBox="0 0 20 20"
          //   fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
          //   {...props}
          // >
          //   <path
          //     d="M9.16667 17.5V12L5.29167 15.8958L4.10417 14.7083L8 10.8333H2.5V9.16667H8L4.10417 5.29167L5.29167 4.10417L9.16667 8V2.5H10.8333V8L14.7083 4.10417L15.8958 5.29167L12 9.16667H17.5V10.8333H12L15.8958 14.7083L14.7083 15.8958L10.8333 12V17.5H9.16667Z"
          //     fill={color}
          //   />
          // </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path d="M10 4.58301V15.4163" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M6.25 6.25L13.75 13.75" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M4.58398 10L15.4173 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M6.25 13.75L13.75 6.25" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Signature: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
          >
            <path
              d="M9.79883 14.2048H12.2738L18.7738 7.70436C19.102 7.37616 19.2864 6.93102 19.2864 6.46687C19.2864 6.00272 19.102 5.55758 18.7738 5.22938C18.4456 4.90118 18.0005 4.7168 17.5363 4.7168C17.0722 4.7168 16.627 4.90118 16.2988 5.22938L9.79883 11.7299V14.2048Z"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.2988 6.7041L17.2988 8.7041"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.80078 14.2031H5.30078C4.47235 14.2031 3.80078 14.8747 3.80078 15.7031V15.7031C3.80078 16.5316 4.47043 17.2031 5.29886 17.2031C6.64949 17.2031 8.6684 17.2031 10.3019 17.2031C11.1303 17.2031 11.8008 17.8747 11.8008 18.7031V18.7031C11.8008 19.5316 11.1292 20.2031 10.3008 20.2031H6.80078"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Initials: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.8122 9.8668C16.8948 9.8668 16.174 10.1841 15.785 10.5822C15.5998 10.7718 15.3189 10.9003 15.0718 10.8045L13.729 10.2844C13.4818 10.1886 13.3563 9.90814 13.4844 9.67606C14.354 8.10086 16.275 7.4668 17.8122 7.4668C18.9105 7.4668 19.881 7.75295 20.5882 8.39539C21.3074 9.04881 21.6004 9.93116 21.6004 10.8004C21.6004 13.0642 21.6004 15.2766 21.6004 17.5206C21.6004 17.7857 21.3855 18.0006 21.1204 18.0006H19.3185C19.2533 18.0006 19.2004 17.9477 19.2004 17.8824C19.2004 17.7906 19.1 17.7335 19.0198 17.7784C18.137 18.2724 17.0066 18.6442 15.8354 18.3514C14.3401 17.9776 13.3287 17.1212 12.9735 15.9668C12.6368 14.8728 12.9729 13.7383 13.6732 13.01C14.1789 12.4842 14.7967 12.1999 15.3703 12.0272C15.9333 11.8578 16.5354 11.7733 17.0497 11.704C17.8498 11.5961 18.4561 11.5104 18.9273 11.3405C19.0985 11.2788 19.2004 11.1096 19.2004 10.9277V10.8004C19.2004 10.4697 19.0992 10.2852 18.9744 10.1718C18.8375 10.0474 18.5139 9.8668 17.8122 9.8668ZM19.2004 13.7632C18.47 13.9575 14.9186 13.8797 15.3703 15.3477C15.8872 17.0271 18.459 15.9668 19.1912 14.6179C19.1943 14.6147 19.1973 14.6114 19.2004 14.6082V13.7632Z"
              fill="#515151"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.83058 12.001L7.19953 8.49061L8.56878 12.001H5.83058ZM4.89464 14.401L3.62507 17.6565C3.5532 17.8408 3.37566 17.9621 3.17787 17.9621H1.32328C0.979894 17.9621 0.747578 17.612 0.880986 17.2956L5.96981 5.22613C6.04481 5.04826 6.21907 4.93262 6.41211 4.93262H7.98242C8.17774 4.93262 8.35358 5.05097 8.42711 5.23193L13.3313 17.3014C13.4595 17.617 13.2273 17.9621 12.8866 17.9621H11.222C11.0242 17.9621 10.8466 17.8408 10.7748 17.6565L9.50492 14.401H4.89464Z"
              fill="#515151"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.TextBox: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            {...props}
          >
            <path
              d="M1 3.4V1H13V3.4"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M7 1V12.4" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
            <path d="M4.59961 13H9.39961" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.CheckBox: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
          >
            <path
              d="M9 12L11.5 14.5L19.5 6.5"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 4.5H7C5.61929 4.5 4.5 5.61929 4.5 7V17C4.5 18.3807 5.61929 19.5 7 19.5H17C18.3807 19.5 19.5 18.3807 19.5 17V12"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.FullName: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
          >
            <path
              d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z"
              stroke="#515151"
              strokeWidth="2"
            />
            <path
              d="M6 19.5C6.37394 17.6303 8.09315 16 9.99988 16H14C15.9067 16 17.6261 17.6303 18 19.5"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Checked: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_43039_206757)">
              <path
                d="M3.33203 8.00032L6.66536 11.3337L13.332 4.66699"
                stroke="#04A451"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_43039_206757">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Number: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
          >
            <path
              d="M5.51953 8.76074H19.5595"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6.59961 19.0215L10.9196 4.98149"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M13.0801 19.0215L17.4001 4.98148"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4.43945 15.2393H18.4795"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Currency: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
          >
            <path
              d="M16.3192 7.05039C16.3192 7.05039 14.8792 5.40039 11.9992 5.40039C9.11922 5.40039 7.67922 7.05039 7.67922 8.70039C7.67922 12.8254 16.7992 10.6804 16.7992 15.3004C16.7992 17.2804 15.1992 18.6004 11.9992 18.6004C8.79922 18.6004 7.19922 16.6204 7.19922 16.6204"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 3.59961C13 3.04732 12.5523 2.59961 12 2.59961C11.4477 2.59961 11 3.04732 11 3.59961L13 3.59961ZM11 20.3996C11 20.9519 11.4477 21.3996 12 21.3996C12.5523 21.3996 13 20.9519 13 20.3996H11ZM11 3.59961V20.3996H13V3.59961L11 3.59961Z"
              fill="#515151"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.File: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M11.8008 1.89844V5.49844C11.8008 5.73713 11.8956 5.96605 12.0644 6.13483C12.2332 6.30362 12.4621 6.39844 12.7008 6.39844H16.3008"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.22643 17.5712L4.93353 16.8641L4.22643 17.5712ZM3.69922 16.2984H2.69922H3.69922ZM5.49922 1.89844V0.898438V1.89844ZM11.7992 1.89844L12.5063 1.19133C12.3188 1.00379 12.0644 0.898438 11.7992 0.898438V1.89844ZM16.2992 6.39844H17.2992C17.2992 6.13322 17.1939 5.87887 17.0063 5.69133L16.2992 6.39844ZM15.772 17.5712L15.0649 16.8641L15.772 17.5712ZM14.4992 17.0984H5.49922V19.0984H14.4992V17.0984ZM5.49922 17.0984C5.28705 17.0984 5.08356 17.0142 4.93353 16.8641L3.51932 18.2783C4.04442 18.8034 4.75661 19.0984 5.49922 19.0984V17.0984ZM4.93353 16.8641C4.7835 16.7141 4.69922 16.5106 4.69922 16.2984H2.69922C2.69922 17.041 2.99422 17.7532 3.51932 18.2783L4.93353 16.8641ZM4.69922 16.2984V3.69844H2.69922V16.2984H4.69922ZM4.69922 3.69844C4.69922 3.48626 4.7835 3.28278 4.93353 3.13275L3.51932 1.71854C2.99422 2.24364 2.69922 2.95583 2.69922 3.69844H4.69922ZM4.93353 3.13275C5.08356 2.98272 5.28705 2.89844 5.49922 2.89844V0.898438C4.75661 0.898438 4.04442 1.19344 3.51932 1.71854L4.93353 3.13275ZM5.49922 2.89844H11.7992V0.898438H5.49922V2.89844ZM11.0921 2.60554L15.5921 7.10554L17.0063 5.69133L12.5063 1.19133L11.0921 2.60554ZM15.2992 6.39844V16.2984H17.2992V6.39844H15.2992ZM15.2992 16.2984C15.2992 16.5106 15.2149 16.7141 15.0649 16.8641L16.4791 18.2783C17.0042 17.7532 17.2992 17.041 17.2992 16.2984H15.2992ZM15.0649 16.8641C14.9149 17.0142 14.7114 17.0984 14.4992 17.0984V19.0984C15.2418 19.0984 15.954 18.8034 16.4791 18.2783L15.0649 16.8641Z"
              fill="#515151"
            />
            <path d="M7.5 9.5H12.5" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
            <path d="M7.5 13.5H10.5" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.PhoneNumber: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
          >
            <path
              d="M19.1983 15.5423V17.7023C19.1992 17.9028 19.1581 18.1013 19.0778 18.285C18.9974 18.4687 18.8796 18.6337 18.7318 18.7692C18.5841 18.9048 18.4096 19.008 18.2197 19.0722C18.0297 19.1365 17.8285 19.1603 17.6287 19.1423C15.4132 18.9015 13.285 18.1445 11.4151 16.9319C9.67551 15.8264 8.20059 14.3515 7.09515 12.6119C5.87833 10.7335 5.12109 8.59499 4.88475 6.36947C4.86676 6.17037 4.89042 5.9697 4.95423 5.78024C5.01804 5.59079 5.1206 5.41669 5.25538 5.26904C5.39016 5.12139 5.55421 5.00343 5.73708 4.92265C5.91995 4.84188 6.11764 4.80006 6.31755 4.79987H8.47755C8.82697 4.79644 9.16572 4.92017 9.43066 5.14802C9.6956 5.37586 9.86864 5.69228 9.91755 6.03827C10.0087 6.72952 10.1778 7.40824 10.4215 8.06147C10.5184 8.31918 10.5394 8.59925 10.482 8.86851C10.4245 9.13776 10.2911 9.38491 10.0975 9.58067L9.18315 10.4951C10.2081 12.2976 11.7006 13.7901 13.5031 14.8151L14.4175 13.9007C14.6133 13.7071 14.8605 13.5737 15.1297 13.5163C15.399 13.4588 15.679 13.4798 15.9367 13.5767C16.59 13.8204 17.2687 13.9895 17.9599 14.0807C18.3097 14.13 18.6291 14.3062 18.8575 14.5757C19.0858 14.8452 19.2071 15.1892 19.1983 15.5423Z"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.DateSigned: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
          >
            <path
              d="M17.3998 4.7998H6.5998C5.60569 4.7998 4.7998 5.60569 4.7998 6.59981V17.3998C4.7998 18.3939 5.60569 19.1998 6.5998 19.1998H17.3998C18.3939 19.1998 19.1998 18.3939 19.1998 17.3998V6.59981C19.1998 5.60569 18.3939 4.7998 17.3998 4.7998Z"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5996 3.59961V5.99961"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.40039 3.59961V5.99961"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.7998 9.59961H19.1998"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.2002 14.4004L13.8002 14.4004"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.DoubleArrow: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.16602 5.83366H15.8327M15.8327 5.83366L12.916 2.91699M15.8327 5.83366L12.916 8.75033"
              stroke={props.stroke || '#515151'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.834 14.1667H4.16732M4.16732 14.1667L7.08398 11.25M4.16732 14.1667L7.08398 17.0833"
              stroke={props.stroke || '#515151'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.UpArrow: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 12.5L10 7.5L15 12.5"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.DownArrow: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#747475"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.User: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.3327 6.66634C13.3327 8.50729 11.8403 9.99967 9.99935 9.99967C8.1584 9.99967 6.66602 8.50729 6.66602 6.66634C6.66602 4.82539 8.1584 3.33301 9.99935 3.33301C11.8403 3.33301 13.3327 4.82539 13.3327 6.66634Z"
              stroke={props.stroke || '#515151'}
              strokeWidth="2"
            />
            <path
              d="M5 16.2497C5.31162 14.6916 6.74429 13.333 8.33323 13.333H11.6667C13.2556 13.333 14.6884 14.6916 15 16.2497"
              stroke={props.stroke || '#515151'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Address: {
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <circle cx="12" cy="11" r="3" stroke={props.stroke || '#515151'} strokeWidth="2" />
            <path
              d="M20 11C20 15.6072 15.283 19.9196 13.0931 21.6734C12.4466 22.1912 11.5533 22.1912 10.9069 21.6734C8.71695 19.9196 4 15.6072 4 11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11Z"
              stroke={props.stroke || '#515151'}
              strokeWidth="2"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.StrikeThrough: {
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.6 17.8308C13.2686 17.8308 13 17.5622 13 17.2308V14H11V17.2047C11 17.536 10.7314 17.8047 10.4 17.8047H9.49887C9.1675 17.8047 8.89887 17.536 8.89887 17.2047V16.5198C8.89887 16.4951 8.87886 16.4751 8.85418 16.4751C8.83718 16.4751 8.82168 16.4848 8.81397 16.4999C8.68199 16.7595 8.49897 17.0033 8.26491 17.2313C8.02742 17.4623 7.72755 17.6492 7.36528 17.7921C7.00704 17.9307 6.58641 18 6.1034 18C5.51572 18 4.98641 17.8908 4.51547 17.6723C4.04855 17.4497 3.67824 17.122 3.40453 16.6894C3.13484 16.2567 3 15.7232 3 15.0888C3 14.6704 3.05672 14.3075 3.17015 14H2.6C2.26863 14 2 13.7314 2 13.4V12.6C2 12.2686 2.26863 12 2.6 12H7.75817C7.78687 11.9962 7.8149 11.9924 7.84226 11.9887C8.18038 11.9382 8.42591 11.8626 8.57887 11.7618C8.73585 11.6568 8.81434 11.4951 8.81434 11.2766V11.2388C8.81434 10.7641 8.6795 10.3966 8.40981 10.1361C8.14012 9.87566 7.7517 9.74543 7.24453 9.74543C6.70918 9.74543 6.28453 9.86725 5.97057 10.1109C5.81026 10.2369 5.67687 10.3747 5.5704 10.5244C5.4009 10.7626 5.13118 10.9428 4.84199 10.9L3.97132 10.7709C3.61534 10.7182 3.38073 10.3625 3.53374 10.0368C3.68242 9.72027 3.8708 9.44043 4.09887 9.19723C4.46918 8.79815 4.92201 8.49989 5.45736 8.30246C5.9927 8.10082 6.5844 8 7.23245 8C7.67924 8 8.12403 8.05461 8.56679 8.16383C9.00956 8.27305 9.41409 8.45369 9.78038 8.70573C10.1467 8.95358 10.4405 9.29175 10.6619 9.72023C10.8873 10.1487 11 10.6843 11 11.327V12H13V5.6C13 5.26863 13.2686 5 13.6 5H14.3972C14.7286 5 14.9972 5.26863 14.9972 5.6V9.74895C14.9972 9.77661 15.0197 9.79904 15.0473 9.79904C15.0672 9.79904 15.0851 9.78731 15.0933 9.76922C15.1954 9.54405 15.3362 9.30548 15.5159 9.05349C15.7034 8.78618 15.9572 8.55855 16.2772 8.3706C16.5972 8.17847 17.0055 8.08241 17.5021 8.08241C18.1568 8.08241 18.7471 8.27245 19.2731 8.65253C19.8028 9.02843 20.2221 9.58602 20.531 10.3253C20.7375 10.8107 20.8758 11.3689 20.9459 12H21.4C21.7314 12 22 12.2686 22 12.6V13.4C22 13.7314 21.7314 14 21.4 14H20.9529C20.8863 14.6485 20.7494 15.2237 20.5421 15.7258C20.2368 16.4651 19.8211 17.0289 19.2952 17.4173C18.7692 17.8058 18.1733 18 17.5076 18C17.0221 18 16.6193 17.9081 16.2993 17.7243C15.9793 17.5406 15.7218 17.3192 15.5269 17.0602C15.3468 16.8125 15.2042 16.5777 15.0991 16.3558C15.0873 16.3308 15.0623 16.3147 15.0347 16.3147C14.9957 16.3147 14.9641 16.3463 14.9641 16.3852V17.2308C14.9641 17.5622 14.6955 17.8308 14.3641 17.8308H13.6ZM18.8798 12C18.844 11.7992 18.7967 11.6085 18.7379 11.428C18.5871 10.9643 18.3628 10.601 18.0648 10.3378C17.7669 10.0747 17.3954 9.94313 16.9503 9.94313C16.5237 9.94313 16.1614 10.0705 15.8634 10.3253C15.5655 10.5801 15.3393 10.9372 15.1848 11.3966C15.1233 11.5842 15.0743 11.7853 15.0378 12H18.8798ZM15.0326 14H18.8863C18.8486 14.2212 18.7973 14.431 18.7324 14.6294C18.5816 15.0972 18.3572 15.4668 18.0593 15.7383C17.7614 16.0056 17.3917 16.1393 16.9503 16.1393C16.5274 16.1393 16.1669 16.0098 15.869 15.7508C15.5747 15.4877 15.3485 15.1222 15.1903 14.6545C15.1231 14.4509 15.0705 14.2328 15.0326 14ZM5.71886 14C5.56329 14.0907 5.43386 14.2016 5.33057 14.3327C5.18164 14.5175 5.10717 14.757 5.10717 15.051C5.10717 15.4711 5.25409 15.7883 5.54792 16.0025C5.84176 16.2168 6.2161 16.3239 6.67094 16.3239C7.10969 16.3239 7.49006 16.2336 7.81207 16.0529C8.13409 15.8681 8.38164 15.6244 8.55472 15.322C8.73182 15.0195 8.82038 14.6898 8.82038 14.3327V14H5.71886Z"
              fill="#515151"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Arrow: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#747475"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.AllUsers: {
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#252D44" />
            <path
              d="M13 9C13 10.6569 11.6569 12 10 12C8.34315 12 7 10.6569 7 9C7 7.34315 8.34315 6 10 6C11.6569 6 13 7.34315 13 9Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M14.5 6.04102C15.9189 6.27905 17 7.51304 17 8.99954C17 10.486 15.9189 11.72 14.5 11.9581"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5.5 17.75C5.78045 16.1474 7.06987 14.75 8.49991 14.75H11.5C12.93 14.75 14.2195 16.1474 14.5 17.75"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 14.75C16.93 14.75 18.2195 16.1474 18.5 17.75"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Date: {
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
              d="M17.4008 4.7998H6.60078C5.60667 4.7998 4.80078 5.60569 4.80078 6.59981V17.3998C4.80078 18.3939 5.60667 19.1998 6.60078 19.1998H17.4008C18.3949 19.1998 19.2008 18.3939 19.2008 17.3998V6.59981C19.2008 5.60569 18.3949 4.7998 17.4008 4.7998Z"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5996 3.59961V5.99961"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.40039 3.59961V5.99961"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.80078 9.59961H19.2008"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      case ICON_VARIANT_TYPE.Copy: {
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              d="M8.86393 3.33301L14.47 3.33301C14.912 3.33301 15.3359 3.5086 15.6485 3.82116C15.9611 4.13372 16.1367 4.55765 16.1367 4.99967V12.4997C16.1367 12.9417 15.9611 13.3656 15.6485 13.6782C15.3359 13.9907 14.912 14.1663 14.47 14.1663H8.86393C8.4219 14.1663 7.99798 13.9907 7.68542 13.6782C7.37286 13.3656 7.19727 12.9417 7.19727 12.4997V4.99967C7.19727 4.55765 7.37286 4.13372 7.68542 3.82116C7.99798 3.5086 8.4219 3.33301 8.86393 3.33301Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8027 14.167V15.8337C12.8027 16.2757 12.6271 16.6996 12.3145 17.0122C12.002 17.3247 11.578 17.5003 11.136 17.5003H5.52995C5.08792 17.5003 4.664 17.3247 4.35144 17.0122C4.03888 16.6996 3.86328 16.2757 3.86328 15.8337V8.33366C3.86328 7.89163 4.03888 7.46771 4.35144 7.15515C4.664 6.84259 5.08792 6.66699 5.52995 6.66699H7.19661"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Delete: {
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <g clipPath="url(#clip0_46212_54498)">
              <path
                d="M3.33398 5.83301H16.6673"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33398 9.16699V14.167"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.666 9.16699V14.167"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.16602 5.83301L4.99935 15.833C4.99935 16.275 5.17494 16.699 5.4875 17.0115C5.80006 17.3241 6.22399 17.4997 6.66602 17.4997H13.3327C13.7747 17.4997 14.1986 17.3241 14.5112 17.0115C14.8238 16.699 14.9993 16.275 14.9993 15.833L15.8327 5.83301"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_46212_54498">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Dots: {
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <circle cx="5" cy="12" r="2" fill="#515151" />
            <circle cx="12" cy="12" r="2" fill="#515151" />
            <circle cx="19" cy="12" r="2" fill="#515151" />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.FileBundle: {
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_48532_3648)">
              <path
                d="M10.6367 16L17.364 16C17.8944 16 18.4031 15.7893 18.7782 15.4142C19.1533 15.0391 19.364 14.5304 19.364 14V7L15.5 3H10.6367C10.1063 3 9.59758 3.21071 9.22251 3.58578C8.84743 3.96086 8.63672 4.46957 8.63672 5V14C8.63672 14.5304 8.84743 15.0391 9.22251 15.4142C9.59758 15.7893 10.1063 16 10.6367 16Z"
                stroke="#515151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 3V6.4C15 6.62543 15.0896 6.84163 15.249 7.00104C15.4084 7.16045 15.6246 7.25 15.85 7.25H19.25"
                stroke="#515151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 9.5H16" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 12.5H14" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
              <path
                d="M15.364 16V18C15.364 18.5304 15.1533 19.0391 14.7782 19.4142C14.4031 19.7893 13.8944 20 13.364 20H6.63672C6.10629 20 5.59758 19.7893 5.22251 19.4142C4.84743 19.0391 4.63672 18.5304 4.63672 18V9C4.63672 8.46957 4.84743 7.96086 5.22251 7.58579C5.59758 7.21071 6.10629 7 6.63672 7H8.63672"
                stroke="#515151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_48532_3648">
                <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)" />
              </clipPath>
            </defs>
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.DragDots: {
        return (
          <svg
            width="8"
            height="24"
            viewBox="0 0 8 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <g opacity="0.5">
              <rect y="6" width="3" height="3" rx="1" fill="#747475" />
              <rect y="11" width="3" height="3" rx="1" fill="#747475" />
              <rect y="16" width="3" height="3" rx="1" fill="#747475" />
              <rect x="5" y="6" width="3" height="3" rx="1" fill="#747475" />
              <rect x="5" y="11" width="3" height="3" rx="1" fill="#747475" />
              <rect x="5" y="16" width="3" height="3" rx="1" fill="#747475" />
            </g>
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.GrayFile: {
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8008 1.89844V5.49844C11.8008 5.73713 11.8956 5.96605 12.0644 6.13483C12.2332 6.30362 12.4621 6.39844 12.7008 6.39844H16.3008"
              stroke="#AAABAB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4992 18.0984H5.49922C5.02183 18.0984 4.56399 17.9088 4.22643 17.5712C3.88886 17.2337 3.69922 16.7758 3.69922 16.2984V3.69844C3.69922 3.22105 3.88886 2.76321 4.22643 2.42565C4.56399 2.08808 5.02183 1.89844 5.49922 1.89844H11.7992L16.2992 6.39844V16.2984C16.2992 16.7758 16.1096 17.2337 15.772 17.5712C15.4344 17.9088 14.9766 18.0984 14.4992 18.0984Z"
              stroke="#AAABAB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M7.5 9.5H12.5" stroke="#AAABAB" strokeWidth="2" strokeLinecap="round" />
            <path d="M7.5 13.5H10.5" stroke="#AAABAB" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Preview: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2 12.6671C2.91212 12.1405 3.94678 11.8633 5 11.8633C6.05322 11.8633 7.08788 12.1405 8 12.6671C8.91212 12.1405 9.94678 11.8633 11 11.8633C12.0532 11.8633 13.0879 12.1405 14 12.6671"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 3.99916C2.91212 3.47255 3.94678 3.19531 5 3.19531C6.05322 3.19531 7.08788 3.47255 8 3.99916C8.91212 3.47255 9.94678 3.19531 11 3.19531C12.0532 3.19531 13.0879 3.47255 14 3.99916"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 4V12.6667"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 4V12.6667"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 4V12.6667"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Pencil: {
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_43389_51259)">
              <path
                d="M2.66797 13.3322H5.33464L12.3346 6.33223C12.6883 5.97861 12.8869 5.499 12.8869 4.9989C12.8869 4.4988 12.6883 4.01919 12.3346 3.66557C11.981 3.31194 11.5014 3.11328 11.0013 3.11328C10.5012 3.11328 10.0216 3.31194 9.66797 3.66557L2.66797 10.6656V13.3322Z"
                stroke="#FF576D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 4.33398L11.6667 7.00065"
                stroke="#FF576D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_43389_51259">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Trash: {
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66797 4.66699H13.3346"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66797 7.33301V11.333"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.33203 7.33301V11.333"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33203 4.66699L3.9987 12.667C3.9987 13.0206 4.13917 13.3598 4.38922 13.6098C4.63927 13.8598 4.97841 14.0003 5.33203 14.0003H10.6654C11.019 14.0003 11.3581 13.8598 11.6082 13.6098C11.8582 13.3598 11.9987 13.0206 11.9987 12.667L12.6654 4.66699"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 4.66667V2.66667C6 2.48986 6.07024 2.32029 6.19526 2.19526C6.32029 2.07024 6.48986 2 6.66667 2H9.33333C9.51014 2 9.67971 2.07024 9.80474 2.19526C9.92976 2.32029 10 2.48986 10 2.66667V4.66667"
              stroke="#FF576D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.MenuDotsBg: {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            {...props}
          >
            <rect width="32" height="32" rx="16" fill="#E8E9EA" />
            <circle cx="9" cy="16" r="2" fill="#262626" />
            <circle cx="16" cy="16" r="2" fill="#262626" />
            <circle cx="23" cy="16" r="2" fill="#262626" />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Document: {
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.667 2.5V5.83333C11.667 6.05435 11.7548 6.26631 11.9111 6.42259C12.0674 6.57887 12.2793 6.66667 12.5003 6.66667H15.8337"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.167 17.5H5.83366C5.39163 17.5 4.96771 17.3244 4.65515 17.0118C4.34259 16.6993 4.16699 16.2754 4.16699 15.8333V4.16667C4.16699 3.72464 4.34259 3.30072 4.65515 2.98816C4.96771 2.67559 5.39163 2.5 5.83366 2.5H11.667L15.8337 6.66667V15.8333C15.8337 16.2754 15.6581 16.6993 15.3455 17.0118C15.0329 17.3244 14.609 17.5 14.167 17.5Z"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 7.5H8.33333"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 10.8333H12.5"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 14.1667H12.5"
              stroke="#515151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.LineThickness: {
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <rect x="2" y="13" width="16" height="3" rx="1" fill="white" />
            <rect x="2" y="8" width="16" height="2" rx="1" fill="white" />
            <rect x="2" y="4" width="16" height="1" rx="0.5" fill="white" />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.SuccessTick: {
        return (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <circle cx="40" cy="40" r="39" stroke="#04A451" strokeWidth="2" />
            <g clipPath="url(#clip0_42433_197302)">
              <path
                d="M28.332 39.9997L36.6654 48.333L53.332 31.6664"
                stroke="#04A451"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_42433_197302">
                <rect width="40" height="40" fill="white" transform="translate(20 20)" />
              </clipPath>
            </defs>
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Download: {
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 14V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V14"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10L12 14L16 10"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14V5"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      case ICON_VARIANT_TYPE.Cross: {
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path d="M17 17L7 7" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 17L17 7" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return getIcons();
};
