import { useState, useEffect } from "react";
import { Flex, Mark, Title, Transition } from "@mantine/core";
import { services } from "./db.services";
import { ArticleContainer } from "../../global.styles";
import { useStyles } from "./article.styles";

export interface Service {
  title: string;
  description: string;
}

export default function Articles() {
  const { classes } = useStyles();

  const [currentService, setCurrentService] = useState<Service>(services[0]);
  const [titleIsMounted, setTitleIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setTitleIsMounted(true);
    const interval = setInterval(() => {
      setTitleIsMounted(false);
      setTimeout(() => {
        setCurrentService((prevService) => {
          const currentIndex = services.indexOf(prevService);
          const nextIndex = (currentIndex + 1) % services.length;
          return services[nextIndex];
        });
        setTitleIsMounted(true);
      }, 400);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ArticleContainer>
      <Flex className={classes.styledGroup}>
        <Transition
          mounted={titleIsMounted}
          transition="skew-up"
          duration={400}
          timingFunction="ease"
        >
          {(styles) => (
            <Title style={styles} className={classes.title}>
              {currentService.title.slice(0, 10)}
              <Mark style={styles} bg="#ffd166">
                {currentService.title.slice(10)}
              </Mark>
            </Title>
          )}
        </Transition>
      </Flex>
    </ArticleContainer>
  );
}
