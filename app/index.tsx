import { useState } from 'react';
import { Button, Text, YStack, XStack, Image, Progress, Slider, Spinner } from 'tamagui';

export default function HomeScreen() {
    const [progress, setProgress] = useState(0);

    return (
        <YStack w="100%" px={24} rowGap="16px">
            <Image
                source={{
                    uri: "https://picsum.photos/200/300",
                    width: 200,
                    height: 300,
                }}
                width="100%"
                objectFit='contain'
            />
            <Spinner size="large" color="$orange10" />
            <Text>Progress: {progress}%</Text>
            <Button size="$6">Button</Button>
            <Progress value={progress} >
                <Progress.Indicator animation="bouncy" />
            </Progress>
            <XStack width="100%" justifyContent="center">
                <Slider
                    size="$2"
                    width={240}
                    defaultValue={[progress]}
                    min={0}
                    max={100}
                    step={10}
                    onValueChange={([value]) => setProgress(value)}
                >
                    <Slider.Track borderColor="gray-200">
                        <Slider.TrackActive />
                    </Slider.Track>
                    <Slider.Thumb circular index={0} />
                </Slider>
            </XStack>
        </YStack>
    );
}