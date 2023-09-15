// 環境変数を設定する
// https://dev.classmethod.jp/articles/using-globalsetup-for-setting-environment-variables-to-be-referenced-during-vitest-tests/

import { vi } from "vitest";
import { NextFont } from "next/dist/compiled/@next/font";

vi.mock("next/font/google", () => {
  return {
    Inter: (): NextFont => {
      return { className: "mock_font", style: { fontFamily: "Inter" } };
    },
  };
});
