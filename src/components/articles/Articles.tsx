import { useState, useEffect } from "react";
import { Flex, Text, Title, Transition } from "@mantine/core";
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
  const [descIsMounted, setDescIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setTitleIsMounted(true);
    setDescIsMounted(true);
    const interval = setInterval(() => {
      setTitleIsMounted(false);
      setDescIsMounted(false);
      setTimeout(() => {
        setCurrentService((prevService) => {
          const currentIndex = services.indexOf(prevService);
          const nextIndex = (currentIndex + 1) % services.length;
          return services[nextIndex];
        });
        setTitleIsMounted(true);
        setDescIsMounted(true);
      }, 400);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ArticleContainer>
      <Flex className={classes.styledGroup}>
        <Transition
          mounted={titleIsMounted}
          transition="fade"
          duration={400}
          timingFunction="ease"
        >
          {(styles) => (
            <Title style={styles} className={classes.title}>
              {currentService.title}
            </Title>
          )}
        </Transition>
        <Transition
          mounted={descIsMounted}
          transition="scale-x"
          duration={400}
          timingFunction="ease"
        >
          {(styles) => (
            <Text style={styles} className={classes.text}>
              {currentService.description}
            </Text>
          )}
        </Transition>
      </Flex>
    </ArticleContainer>
  );
}
