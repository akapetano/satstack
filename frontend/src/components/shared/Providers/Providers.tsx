import { ComponentLibraryProvider } from "./components/ComponentLibraryProvider/ComponentLibraryProvider";

interface IProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return <ComponentLibraryProvider>{children}</ComponentLibraryProvider>;
}
