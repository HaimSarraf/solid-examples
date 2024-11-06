import { useState } from "react";
import { AreaCalculator } from "../Liskov-Substitution/LSP-Violated";
import {
  AreaOfSqureCalculaor,
  AreaOfRectangleCalculator,
} from "../Liskov-Substitution/LSP-Ok.tsx";

export default function LSP() {
  //LSP-Violated
  const [rectanglesWidth, setRectangleWidth] = useState<number>();
  const [rectanglesHeight, setRectangleHeight] = useState<number>();

  const [squareWidth, setSquareWidth] = useState<number>();
  const [squareHeight, setSquareHeight] = useState<number>();

  //LSP-Ok
  const [side, setSide] = useState<number>();

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-green-100 flex flex-col items-center gap-5">
        <div>LSP Disregarded !</div>
        <h2>Rectangle Area Calculator</h2>
        <form className="flex flex-row gap-4">
          <label htmlFor="width">Width</label>
          <input
            type="number"
            value={rectanglesWidth}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                setRectangleWidth(value);
              }
            }}
          />
          <label htmlFor="height">Height</label>
          <input
            type="number"
            value={rectanglesHeight}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                setRectangleHeight(value);
              }
            }}
          />

          {rectanglesHeight && rectanglesWidth && (
            <div className="flex flex-row">
              <p>The Result is :</p>
              <span>{AreaCalculator(rectanglesHeight!, rectanglesWidth!)}</span>
            </div>
          )}
        </form>
        <h1>Square Area Calculator</h1>
        <form className="flex flex-row gap-4">
          <label htmlFor="width">Width</label>
          <input
            type="number"
            value={squareWidth}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                setSquareWidth(value);
              }
            }}
          />
          <label htmlFor="height">Height</label>
          <input
            type="number"
            value={squareHeight}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                setSquareHeight(value);
              }
            }}
          />

          {squareHeight && squareWidth && (
            <div className="flex flex-row">
              {squareHeight === squareWidth ? (
                <div className="flex  flex-row">
                  <p>The Result is :</p>
                  <span>{AreaCalculator(squareHeight!, squareWidth!)}</span>
                </div>
              ) : (
                <p className="text-xs">width != height</p>
              )}
            </div>
          )}
        </form>
      </div>
      <div className="bg-pink-200 gap-5 flex flex-col items-center">
        <div>LSP Regarded :)</div>
        <h2>Rectangle Area Calculator</h2>
        <form className="flex flex-row gap-4">
          <label htmlFor="width">Width</label>
          <input
            type="number"
            value={rectanglesWidth}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                setRectangleWidth(value);
              }
            }}
          />
          <label htmlFor="height">Height</label>
          <input
            type="number"
            value={rectanglesHeight}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                setRectangleHeight(value);
              }
            }}
          />

          {rectanglesHeight && rectanglesWidth && (
            <div className="flex flex-row">
              <p>The Result is :</p>
              <span>
                {AreaOfRectangleCalculator(rectanglesHeight!, rectanglesWidth!)}
              </span>
            </div>
          )}
        </form>
        <h1>Square Area Calculator</h1>
        <form className="flex flex-row gap-4">
          <label htmlFor="side">Side</label>
          <input
            type="number"
            value={side}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                setSide(value);
              }
            }}
          />
          {side && <p>The Area is {AreaOfSqureCalculaor(side)}</p>}
        </form>
      </div>
    </div>
  );
}
