import { Work } from "../types";
import calclatorImage from "../images/calclator.png";
import allowanceManagementImage from "../images/allowance-management.png";

const works: Work[] = [
  {
    id: 0,
    title: "calclator",
    description: "React＋Redux+TypeScriptの学習で作成した電卓です。\n少ない横幅でも桁数を多く表示するためにディスプレイを2段にするなどの工夫をしました。",
    image: calclatorImage,
    demo: "https://google.com",
    source: "https://github.com"
  },
  {
    id: 1,
    title: "allowance-management",
    description: "ReactNativeで作成したアプリケーションです。\n親が子どもに渡すお小遣いを管理するという目的で作成しました。",
    image: allowanceManagementImage,
    demo: "https://google.com",
    source: "https://github.com",
  },
];

export default works;
