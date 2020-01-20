import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Stack,
    Tag,
    useDisclosure,
    useColorMode,
    useTheme
} from "@chakra-ui/core";
import useConfig from "~/components/HyperglassProvider";
import useMedia from "~/components/MediaProvider";
import CodeBlock from "~/components/CodeBlock";

const prettyMediaSize = { sm: "SMALL", md: "MEDIUM", lg: "LARGE", xl: "X-LARGE" };

export default () => {
    const { isOpen: configOpen, onOpen: onConfigOpen, onClose: configClose } = useDisclosure();
    const { isOpen: themeOpen, onOpen: onThemeOpen, onClose: themeClose } = useDisclosure();
    const config = useConfig();
    const theme = useTheme();
    const bg = { light: theme.colors.white, dark: theme.colors.black };
    const color = { light: theme.colors.black, dark: theme.colors.white };
    const { colorMode } = useColorMode();
    const { mediaSize } = useMedia();
    const colorModeBadge = { light: "gray", dark: "black" };
    const borderColor = { light: "gray.100", dark: "gray.600" };
    return (
        <>
            <Stack
                borderWidth="1px"
                borderColor={borderColor[colorMode]}
                py={4}
                mx={-4}
                px={4}
                isInline
                position="fixed"
                bottom="10%"
                left={0}
                right={0}
                justifyContent="center"
            >
                <Tag variantColor={colorModeBadge[colorMode]}>{colorMode.toUpperCase()}</Tag>
                <Tag variantColor="teal">{prettyMediaSize[mediaSize]}</Tag>
                <Button size="sm" variantColor="cyan" onClick={onConfigOpen}>
                    View Config
                </Button>
                <Button size="sm" variantColor="purple" onClick={onThemeOpen}>
                    View Theme
                </Button>
            </Stack>
            <Modal isOpen={configOpen} onClose={configClose} size="full">
                <ModalOverlay />
                <ModalContent bg={bg[colorMode]} color={color[colorMode]} py={4} borderRadius="md">
                    <ModalHeader>Loaded Configuration</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CodeBlock>{JSON.stringify(config, null, 4)}</CodeBlock>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal isOpen={themeOpen} onClose={themeClose} size="xl">
                <ModalOverlay />
                <ModalContent bg={bg[colorMode]} color={color[colorMode]} py={4} borderRadius="md">
                    <ModalHeader>Loaded Theme</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CodeBlock>{JSON.stringify(theme, null, 4)}</CodeBlock>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};