import { Box } from "@chakra-ui/react";
import { Footer } from "@/components/shared/Footer/Footer";
import { Header } from "@/components/shared/Header/Header";

interface AppLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export const AppLayout = ({
  children,
  showHeader = true,
  showFooter = true,
}: AppLayoutProps) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {showHeader && <Header />}

      <Box as="main" flex="1" display="flex" flexDirection="column">
        {children}
      </Box>

      {showFooter && <Footer />}
    </Box>
  );
};
