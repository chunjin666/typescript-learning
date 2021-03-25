// 可以改变一个类型的属性定义生成新的类型
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

// 从 FeatureFlags 生成了一个新的类型，把2个属性都变成了 boolean类型
type FeatureOptions = OptionsFlags<FeatureFlags>;
//   ^ = type FeatureOptions = {
//       darkMode: boolean;
//       newUserProfile: boolean;
//   }