import { useState } from 'react';
import { Form, FormGroup, FormLabel, Button, ButtonGroup } from 'react-bootstrap';
import './Stopwatch.css';


export default function Stopwatch() {
    const [tick, setTick] = useState(null);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [started, setStaterd] = useState(false);
    const Separator = () => {
        return <FormLabel className='Stopwatch-number'>:</FormLabel>
    }
    function incrementCount() {
        setTotalSeconds(totalSeconds + 1)
    }
    function getHours() {
        return parseInt(totalSeconds / 60 / 60) % 24;
    }

    function getMinutes() {
        return parseInt(totalSeconds / 60) % 60;
    }
    function getSeconds() {
        return totalSeconds % 60;
    }
    const startCounter = () => {
        clearInterval(tick);
        setTick(
            setInterval(() => incrementCount(), 1000)
        );
        setStaterd(true);
    }
    const stopCounter = () => {
        clearInterval(tick);
        setTick(null);
        setStaterd(false);
    }

    const resetCounter = () => {
        clearInterval(tick);
        setTick(null);
        setTotalSeconds(0);
        setStaterd(false);
    }
    const resumeCounter = () => {
        clearInterval(tick);
        setTick(setInterval(() => incrementCount(), 1000));
        setStaterd(true);
    }
    const leadingZero = (num) => {
        return num < 10 ? '0' + num : num;
    }


    //setStaterd(getHours > 0 || getMinutes > 0 || getSeconds > 0);

    // buttons = () => {
    //     return(

    //         );
    // };
    return (
        <>
            <div className='Stopwatch'>
                <Form className='Stopwatch-display'>
                    <FormGroup controlId='formStopwatch'>
                        <FormLabel className='Stopwatch-number'>{leadingZero(getHours())}</FormLabel>
                        <Separator />
                        <FormLabel className='Stopwatch-number'>{leadingZero(getMinutes())}</FormLabel>
                        <Separator />
                        <FormLabel className='Stopwatch-number'>{leadingZero(getSeconds())}</FormLabel>
                    </FormGroup>
                    <FormGroup>
                        {(!tick && !started) &&
                            (< ButtonGroup >
                                <ButtonGroup className='Stopwatch-button-group'>
                                    <Button
                                        className='Stopwatch-button'
                                        onClick={startCounter}>Start</Button>
                                </ButtonGroup>
                            </ButtonGroup >)
                        }
                        {(!tick && started) &&
                            (
                                <ButtonGroup >
                                    <ButtonGroup className='Stopwatch-button-group'>
                                        <Button
                                            className='Stopwatch-button'
                                            onClick={resumeCounter}>Resume</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className='Stopwatch-button-group'>
                                        <Button
                                            className='Stopwatch-button'
                                            onClick={resetCounter}>Reset</Button>
                                    </ButtonGroup>
                                </ButtonGroup>)
                        }
                        {(tick && started) &&
                            (<ButtonGroup >
                                <ButtonGroup className='Stopwatch-button-group'>
                                    <Button
                                        className='Stopwatch-button'
                                        onClick={stopCounter}>Stop</Button>
                                </ButtonGroup>
                                <ButtonGroup className='Stopwatch-button-group'>
                                    <Button
                                        className='Stopwatch-button'
                                        onClick={resetCounter}>Reset</Button>
                                </ButtonGroup>
                            </ButtonGroup>)
                        }
                    </FormGroup>
                </Form>
            </div>

        </>


    );
}