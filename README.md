# Progress Bar Component

This is app with a progress bar component.
The bar changes when the input is changed

## Preview
![Preview of App](https://github.com/MuriithiMark/react-lessons/blob/progress-bar-component/preview.png)

## Issues

I had an issue with styling of the background of the moving progress bar.
The Backgroud has a varying gradient from red to pink, moving left to right.

To solve this use linear-gradient css function
```css
background-image: linear-gradient(to right, red, pink);
```
