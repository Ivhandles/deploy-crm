import React from 'react'

type Props = {}

function SettingsIcon({}: Props) {
  return (
    <div><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" clip-path="url(#clip0_8018_1995)">
    <path d="M20.1748 13.1682L18.6397 11.8557C18.7123 11.4104 18.7498 10.9557 18.7498 10.501C18.7498 10.0464 18.7123 9.59167 18.6397 9.14636L20.1748 7.83386C20.2906 7.73474 20.3735 7.60271 20.4124 7.45534C20.4513 7.30797 20.4445 7.15224 20.3928 7.00886L20.3717 6.94792C19.9491 5.76674 19.3162 4.67176 18.5037 3.71589L18.4615 3.66667C18.363 3.55078 18.2316 3.46747 18.0847 3.42772C17.9379 3.38798 17.7824 3.39366 17.6389 3.44402L15.7334 4.12136C15.0303 3.5448 14.2451 3.09011 13.3967 2.77136L13.0287 0.779175C13.001 0.629274 12.9282 0.491368 12.8202 0.383779C12.7122 0.27619 12.574 0.204011 12.424 0.176831L12.3607 0.165112C11.1397 -0.0552002 9.85528 -0.0552002 8.63418 0.165112L8.5709 0.176831C8.4209 0.204011 8.28271 0.27619 8.1747 0.383779C8.06669 0.491368 7.99398 0.629274 7.96622 0.779175L7.5959 2.78074C6.75424 3.09955 5.97043 3.554 5.27559 4.12605L3.35606 3.44402C3.21254 3.39326 3.05698 3.38737 2.91003 3.42714C2.76309 3.46691 2.63173 3.55046 2.5334 3.66667L2.49122 3.71589C1.67968 4.67243 1.04694 5.76723 0.623247 6.94792L0.602153 7.00886C0.496684 7.30183 0.583403 7.62996 0.820122 7.83386L2.37403 9.16043C2.30137 9.60105 2.26622 10.051 2.26622 10.4987C2.26622 10.9487 2.30137 11.3987 2.37403 11.837L0.820122 13.1636C0.704331 13.2627 0.621457 13.3947 0.582522 13.5421C0.543586 13.6894 0.550434 13.8452 0.602153 13.9886L0.623247 14.0495C1.04747 15.2307 1.67559 16.3206 2.49122 17.2815L2.5334 17.3307C2.63197 17.4466 2.76333 17.5299 2.91019 17.5697C3.05704 17.6094 3.2125 17.6038 3.35606 17.5534L5.27559 16.8714C5.97403 17.4456 6.7545 17.9003 7.5959 18.2167L7.96622 20.2182C7.99398 20.3681 8.06669 20.506 8.1747 20.6136C8.28271 20.7212 8.4209 20.7934 8.5709 20.8206L8.63418 20.8323C9.8665 21.0538 11.1284 21.0538 12.3607 20.8323L12.424 20.8206C12.574 20.7934 12.7122 20.7212 12.8202 20.6136C12.9282 20.506 13.001 20.3681 13.0287 20.2182L13.3967 18.2261C14.2448 17.9081 15.0344 17.452 15.7334 16.8761L17.6389 17.5534C17.7824 17.6042 17.938 17.61 18.0849 17.5703C18.2318 17.5305 18.3632 17.447 18.4615 17.3307L18.5037 17.2815C19.3193 16.3182 19.9475 15.2307 20.3717 14.0495L20.3928 13.9886C20.4982 13.7003 20.4115 13.3721 20.1748 13.1682ZM16.9756 9.42292C17.0342 9.77683 17.0647 10.1401 17.0647 10.5034C17.0647 10.8667 17.0342 11.23 16.9756 11.5839L16.8209 12.5237L18.5717 14.0214C18.3063 14.6328 17.9712 15.2116 17.5732 15.7464L15.3982 14.9753L14.6623 15.58C14.1022 16.0393 13.4787 16.4003 12.8037 16.6534L11.9107 16.9886L11.4912 19.262C10.8293 19.337 10.161 19.337 9.49903 19.262L9.0795 16.9839L8.19356 16.644C7.52559 16.3909 6.9045 16.03 6.34903 15.5729L5.61309 14.9659L3.42403 15.744C3.02559 15.2073 2.69278 14.6284 2.42559 14.019L4.19512 12.5073L4.04278 11.5698C3.98653 11.2206 3.95606 10.8596 3.95606 10.5034C3.95606 10.1448 3.98418 9.78621 4.04278 9.43699L4.19512 8.49949L2.42559 6.98777C2.69043 6.37605 3.02559 5.79949 3.42403 5.26277L5.61309 6.04089L6.34903 5.43386C6.9045 4.97683 7.52559 4.61589 8.19356 4.36277L9.08184 4.02761L9.50137 1.74949C10.16 1.67449 10.8326 1.67449 11.4936 1.74949L11.9131 4.02292L12.8061 4.35808C13.4787 4.61121 14.1045 4.97214 14.6647 5.43152L15.4006 6.03621L17.5756 5.26511C17.974 5.80183 18.3068 6.38074 18.574 6.99011L16.8232 8.48777L16.9756 9.42292ZM10.4998 6.14402C8.22168 6.14402 6.37481 7.99089 6.37481 10.269C6.37481 12.5471 8.22168 14.394 10.4998 14.394C12.7779 14.394 14.6248 12.5471 14.6248 10.269C14.6248 7.99089 12.7779 6.14402 10.4998 6.14402ZM12.3561 12.1253C12.1126 12.3694 11.8233 12.5631 11.5047 12.695C11.1861 12.8269 10.8446 12.8946 10.4998 12.894C9.79903 12.894 9.14043 12.6198 8.64356 12.1253C8.3994 11.8818 8.20578 11.5925 8.07385 11.2739C7.94192 10.9553 7.87427 10.6138 7.87481 10.269C7.87481 9.56824 8.14903 8.90964 8.64356 8.41277C9.14043 7.91589 9.79903 7.64402 10.4998 7.64402C11.2006 7.64402 11.8592 7.91589 12.3561 8.41277C12.6002 8.65623 12.7938 8.94557 12.9258 9.26414C13.0577 9.5827 13.1253 9.92421 13.1248 10.269C13.1248 10.9698 12.8506 11.6284 12.3561 12.1253Z" fill="#F6FFED"/>
    </g>
    <defs>
    <clipPath id="clip0_8018_1995">
    <rect width="21" height="21" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    </div>
  )
}

export default SettingsIcon