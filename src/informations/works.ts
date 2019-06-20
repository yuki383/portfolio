import { Work } from "../types";
import calclatorImage from "../images/calclator.png";
import allowanceManagementImage from "../images/allowance-management.png";
import portfolioImage from "../images/portfolio.png";

const works: Work[] = [
  {
    id: 0,
    title: "calclator",
    description: "React＋Redux+TypeScriptの学習で作成した電卓です。\n少ない横幅でも桁数を多く表示するためにディスプレイを2段にするなどの工夫をしました。",
    image: calclatorImage,
    more: "https://github.com/yuki383/calculator",
    demo: "https://yuki383.github.io/calculator/"
  },
  {
    id: 1,
    title: "allowance-management",
    description: "ReactNativeで作成したアプリケーションです。\n親が子どもに渡すお小遣いを管理するという目的で作成しました。",
    image: allowanceManagementImage,
    more: "https://github.com/yuki383/allowance-management",
  },
  {
    id: 2,
    title: "ポートフォリオ",
    description: "ポートフォリオのサイトです。 \n MaterialUIというライブラリを利用し、レスポンシブデザインに対応させました。　",
    image: portfolioImage,
    more: "https://github.com/yuki383/portfolio",
  }
];

export default works;
