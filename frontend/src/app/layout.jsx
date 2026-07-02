export const metadata = {
  title: "Floorplan Viewer",
  description: "壁線＋開口部＋寸法の可視化ツール",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
