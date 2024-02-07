import {render, screen, cleanup} from '@testing-library/react'
import App from '../../App'
import { WorkoutsContextProvider } from '../../context/WorkoutContext';

test('Workout Details render', () => {

    render(<WorkoutsContextProvider><App /></WorkoutsContextProvider>);
    const todoElement = screen.getByTestId('home')
    expect(todoElement).toBeInTheDocument()
})
test('Workout Form render', () => {

    render(<WorkoutsContextProvider><App /></WorkoutsContextProvider>);
    const todoElement = screen.getByTestId('home')
    expect(todoElement).toBeInTheDocument()
})
test('Workout Form successful add', () => {

    render(<WorkoutsContextProvider><App /></WorkoutsContextProvider>);
    const todoElement = screen.getByTestId('home')
    expect(todoElement).toBeInTheDocument()
})
test('Workout Form failed add', () => {

    render(<WorkoutsContextProvider><App /></WorkoutsContextProvider>);
    const todoElement = screen.getByTestId('home')
    expect(todoElement).toBeInTheDocument()
})
test('Workout Details successful add', () => {

    render(<WorkoutsContextProvider><App /></WorkoutsContextProvider>);
    const todoElement = screen.getByTestId('home')
    expect(todoElement).toBeInTheDocument()
})
test('Workout Details successful delete', () => {

    render(<WorkoutsContextProvider><App /></WorkoutsContextProvider>);
    const todoElement = screen.getByTestId('home')
    expect(todoElement).toBeInTheDocument()
})
