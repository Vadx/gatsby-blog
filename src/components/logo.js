import React from "react"
import styled from "styled-components"

const Logo = () => (
  <LogoImage>
    <svg width="165" height="36" viewBox="0 0 165 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <PathText d="M44.6562 25.5469H55.4375V28H41.6406V5.25H44.6562V25.5469ZM61.5469 28H58.6562V11.0938H61.5469V28ZM58.4219 6.60938C58.4219 6.14062 58.5625 5.74479 58.8438 5.42188C59.1354 5.09896 59.5625 4.9375 60.125 4.9375C60.6875 4.9375 61.1146 5.09896 61.4062 5.42188C61.6979 5.74479 61.8438 6.14062 61.8438 6.60938C61.8438 7.07812 61.6979 7.46875 61.4062 7.78125C61.1146 8.09375 60.6875 8.25 60.125 8.25C59.5625 8.25 59.1354 8.09375 58.8438 7.78125C58.5625 7.46875 58.4219 7.07812 58.4219 6.60938ZM70.1094 7V11.0938H73.2656V13.3281H70.1094V23.8125C70.1094 24.4896 70.25 25 70.5312 25.3438C70.8125 25.6771 71.2917 25.8438 71.9688 25.8438C72.3021 25.8438 72.7604 25.7812 73.3438 25.6562V28C72.5833 28.2083 71.8438 28.3125 71.125 28.3125C69.8333 28.3125 68.8594 27.9219 68.2031 27.1406C67.5469 26.3594 67.2188 25.25 67.2188 23.8125V13.3281H64.1406V11.0938H67.2188V7H70.1094ZM83.6719 28.3125C81.3802 28.3125 79.5156 27.5625 78.0781 26.0625C76.6406 24.5521 75.9219 22.5365 75.9219 20.0156V19.4844C75.9219 17.8073 76.2396 16.3125 76.875 15C77.5208 13.6771 78.4167 12.6458 79.5625 11.9062C80.7188 11.1562 81.9688 10.7812 83.3125 10.7812C85.5104 10.7812 87.2188 11.5052 88.4375 12.9531C89.6562 14.401 90.2656 16.474 90.2656 19.1719V20.375H78.8125C78.8542 22.0417 79.3385 23.3906 80.2656 24.4219C81.2031 25.4427 82.3906 25.9531 83.8281 25.9531C84.849 25.9531 85.7135 25.7448 86.4219 25.3281C87.1302 24.9115 87.75 24.3594 88.2812 23.6719L90.0469 25.0469C88.6302 27.224 86.5052 28.3125 83.6719 28.3125ZM83.3125 13.1562C82.1458 13.1562 81.1667 13.5833 80.375 14.4375C79.5833 15.2812 79.0938 16.4688 78.9062 18H87.375V17.7812C87.2917 16.3125 86.8958 15.1771 86.1875 14.375C85.4792 13.5625 84.5208 13.1562 83.3125 13.1562ZM107.188 22.4062C107.188 21.1458 106.745 20.151 105.859 19.4219C104.974 18.6823 103.354 17.9844 101 17.3281C98.6458 16.6615 96.9271 15.9375 95.8438 15.1562C94.3021 14.0521 93.5312 12.6042 93.5312 10.8125C93.5312 9.07292 94.2448 7.66146 95.6719 6.57812C97.1094 5.48438 98.9427 4.9375 101.172 4.9375C102.682 4.9375 104.031 5.22917 105.219 5.8125C106.417 6.39583 107.344 7.20833 108 8.25C108.656 9.29167 108.984 10.4531 108.984 11.7344H107.047C107.047 10.1823 106.516 8.9375 105.453 8C104.391 7.05208 102.964 6.57812 101.172 6.57812C99.4323 6.57812 98.0469 6.96875 97.0156 7.75C95.9844 8.52083 95.4688 9.53125 95.4688 10.7812C95.4688 11.9375 95.9323 12.8802 96.8594 13.6094C97.7865 14.3385 99.2708 14.9844 101.312 15.5469C103.354 16.099 104.901 16.6771 105.953 17.2812C107.005 17.875 107.797 18.5885 108.328 19.4219C108.859 20.2552 109.125 21.2396 109.125 22.375C109.125 24.1667 108.406 25.6042 106.969 26.6875C105.542 27.7708 103.656 28.3125 101.312 28.3125C99.7083 28.3125 98.2344 28.026 96.8906 27.4531C95.5573 26.8802 94.5417 26.0781 93.8438 25.0469C93.1562 24.0156 92.8125 22.8333 92.8125 21.5H94.7344C94.7344 23.1042 95.3333 24.3698 96.5312 25.2969C97.7292 26.224 99.3229 26.6875 101.312 26.6875C103.083 26.6875 104.505 26.2969 105.578 25.5156C106.651 24.7344 107.188 23.6979 107.188 22.4062ZM115.75 6.76562V11.0938H119.25V12.625H115.75V23.8906C115.75 24.8281 115.917 25.526 116.25 25.9844C116.594 26.4427 117.161 26.6719 117.953 26.6719C118.266 26.6719 118.771 26.6198 119.469 26.5156L119.547 28.0469C119.057 28.224 118.391 28.3125 117.547 28.3125C116.266 28.3125 115.333 27.9427 114.75 27.2031C114.167 26.4531 113.875 25.3542 113.875 23.9062V12.625H110.766V11.0938H113.875V6.76562H115.75ZM121.781 19.2969C121.781 17.6719 122.094 16.2083 122.719 14.9062C123.354 13.6042 124.245 12.5938 125.391 11.875C126.547 11.1458 127.854 10.7812 129.312 10.7812C131.562 10.7812 133.385 11.5729 134.781 13.1562C136.177 14.7292 136.875 16.8177 136.875 19.4219V19.8125C136.875 21.4479 136.557 22.9219 135.922 24.2344C135.297 25.5365 134.411 26.5417 133.266 27.25C132.12 27.9583 130.812 28.3125 129.344 28.3125C127.104 28.3125 125.281 27.526 123.875 25.9531C122.479 24.3698 121.781 22.276 121.781 19.6719V19.2969ZM123.656 19.8125C123.656 21.8333 124.177 23.4948 125.219 24.7969C126.271 26.0885 127.646 26.7344 129.344 26.7344C131.031 26.7344 132.396 26.0885 133.438 24.7969C134.49 23.4948 135.016 21.7812 135.016 19.6562V19.2969C135.016 18.0052 134.776 16.8229 134.297 15.75C133.818 14.6771 133.146 13.849 132.281 13.2656C131.417 12.6719 130.427 12.375 129.312 12.375C127.646 12.375 126.286 13.0312 125.234 14.3438C124.182 15.6458 123.656 17.3542 123.656 19.4688V19.8125ZM148.562 12.6875C148.167 12.6146 147.745 12.5781 147.297 12.5781C146.13 12.5781 145.141 12.9062 144.328 13.5625C143.526 14.2083 142.953 15.151 142.609 16.3906V28H140.75V11.0938H142.578L142.609 13.7812C143.599 11.7812 145.188 10.7812 147.375 10.7812C147.896 10.7812 148.307 10.849 148.609 10.9844L148.562 12.6875ZM157.172 25.3125L162.109 11.0938H164.125L156.906 30.875L156.531 31.75C155.604 33.8021 154.172 34.8281 152.234 34.8281C151.786 34.8281 151.307 34.7552 150.797 34.6094L150.781 33.0625L151.75 33.1562C152.667 33.1562 153.406 32.9271 153.969 32.4688C154.542 32.0208 155.026 31.2448 155.422 30.1406L156.25 27.8594L149.875 11.0938H151.922L157.172 25.3125Z" />
      <PathIcon d="M33 5C30.3705 5.18078 11.8971 6.93985 10.6058 19.6053C10.4488 20.9591 10.36 22.319 10.3016 23.68L19.3849 14.6058C19.7023 14.2884 20.2177 14.2884 20.5351 14.6058C20.8525 14.9232 20.8525 15.4376 20.5351 15.755L7.35725 28.9196C6.88092 29.3954 6.88092 30.1673 7.35725 30.6431C7.83358 31.119 8.60597 31.119 9.08281 30.6431L11.984 27.745C14.1214 27.7379 16.2573 27.6166 18.3804 27.3713C21.0963 27.095 23.3073 26.0271 25.1131 24.5001H19.9867L27.4409 22.0179C28.0122 21.2618 28.5261 20.4584 28.9872 19.6251H24.8668L30.2771 16.923C32.4053 11.7468 32.9081 6.33352 33 5Z" />
      </svg>
  </LogoImage>
)

export default Logo

// Styled components:
const LogoImage = styled.span``

const PathText = styled.path`
  fill: ${props => props.theme.textColorPrimary};
`

const PathIcon = styled.path`
  fill: ${props => props.theme.primary};
`