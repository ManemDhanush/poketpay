import {render,screen} from "@testing-library/react"
import TypographyComponent from "."
import React from 'react'
import '@testing-library/jest-dom'

describe("Typography component",()=>{
    test("tests correctly with given text",()=>{
        render(<TypographyComponent variant="h1" children="Director1"/>)
        expect(screen.getByText(/director1/i)).toBeInTheDocument();
    })
})