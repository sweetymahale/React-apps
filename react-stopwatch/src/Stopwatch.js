import { useState } from 'react';
import { Form, FormGroup, FormLabel, Button, ButtonGroup } from 'react-bootstrap';
import './Stopwatch.css';

const Separator = () => {
    return <FormLabel className='Stopwatch-number'>:</FormLabel>
}

export default function Stopwatch() {
    const [tick, setTick] = useState(null);
    const [totalSeconds, setTotalSeconds] = useState(0);

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
    }
    const stopCounter = () => {
        clearInterval(tick);
        setTick(null);
    }

    const resetCounter = () => {
        clearInterval(tick);
        setTick(null);
        setTotalSeconds(0);
    }
    const resumeCounter = () => {
        clearInterval(tick);
        setTick(setInterval(() => incrementCount(), 1000))
    }
    const leadingZero = (num) => {
        return num < 10 ? '0' + num : num;
    }
    let buttons = null;
    let started = getHours() > 0 || getMinutes() > 0 || getSeconds() > 0;

    // buttons = () => {
    //     return(

    //         );
    // };
    return (
        <>
            {!tick && !started
                (< ButtonGroup justified>
                    <ButtonGroup className='Stopwatch-button-group'>
                        <Button bsStyle='info' bsSize='large' block
                            className='Stopwatch-button'
                            onClick={this.startCounter}>Start</Button>
                    </ButtonGroup>
                </ButtonGroup >)
            }
            {!tick && started
                (<ButtonGroup justified>
                    <ButtonGroup className='Stopwatch-button-group'>
                        <Button bsStyle='info' bsSize='large' block
                            className='Stopwatch-button'
                            onClick={this.resumeCounter}>Resume</Button>
                    </ButtonGroup>
                    <ButtonGroup className='Stopwatch-button-group'>
                        <Button bsSize='large' block
                            className='Stopwatch-button'
                            onClick={this.resetCounter}>Reset</Button>
                    </ButtonGroup>
                </ButtonGroup>)
            }
            <ButtonGroup justified>
                <ButtonGroup className='Stopwatch-button-group'>
                    <Button bsStyle='danger' bsSize='large' block
                        className='Stopwatch-button'
                        onClick={this.stopCounter}>Stop</Button>
                </ButtonGroup>
                <ButtonGroup className='Stopwatch-button-group'>
                    <Button bsSize='large' block
                        className='Stopwatch-button'
                        onClick={this.resetCounter}>Reset</Button>
                </ButtonGroup>
            </ButtonGroup>
            <div className='Stopwatch'>
                <Form className='Stopwatch-display'>
                    <FormGroup bsSize='large' controlId='formStopwatch'>
                        <FormLabel className='Stopwatch-number'>{leadingZero(getHours())}</FormLabel>
                        <Separator />
                        <FormLabel className='Stopwatch-number'>{leadingZero(getMinutes())}</FormLabel>
                        <Separator />
                        <FormLabel className='Stopwatch-number'>{leadingZero(getSeconds())}</FormLabel>
                    </FormGroup>
                    <FormGroup>
                        {buttons}
                    </FormGroup>
                </Form>
            </div>

        </>


    );
}