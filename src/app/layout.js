
import "./globals.css";



export const metadata = {
  title: "Cardápio de Restaurante",
  description: "É um Cardápio de um restaurante.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
