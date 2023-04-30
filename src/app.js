import React from "react";
import { Box, Text, Newline } from "ink"

function App() {
    return (
        <>
            <Text>YO!</Text>
            <Newline />
            <Box flexDirection="column" width={48}>
                <Text>
                    Thanks for <Text bold italic color="green">npxing</Text> me!
                    <Newline />
                    My name is Philip Englund (frainbreeze) and I work as a software developer in Sweden.
                    <Newline />
                    <Newline />
                    <Text italic>More to come soon!</Text>
                </Text>
            </Box>
        </>
    );
}

export default App;