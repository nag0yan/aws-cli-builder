import React from "react";
import { CgRemove } from "react-icons/cg";
import { describeInstancesOption } from "../assets/cli-docs/describeInstances";

export type CommandOption = {
  k: string;
  v: string | undefined;
}

export interface CommandOptionProps {
  i: number;
  k: string;
  v: string | undefined;
  deleteHandler: (i: number) => void;
  updateHandler: (i: number, option: CommandOption) => void;
  availableOptions: describeInstancesOption[];
}

export const CommandOption = ({i, k, v, deleteHandler, updateHandler, availableOptions}: CommandOptionProps) => {
  const [newKey, setNewKey] = React.useState(k);
  const [newValue, setNewValue] = React.useState(v);
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <select value={newKey}
      onChange={(e) => {
        setNewKey(e.target.value)
        updateHandler(i, {k: e.target.value, v: newValue})
      }}>
        {availableOptions.map((option, index) => (
          <option key={index} value={option.optionKey} title="some description">{option.optionKey}</option>
        ))}
      </select>
      <input value={newValue} 
      onChange={(e) => {
        setNewValue(e.target.value)
        updateHandler(i, {k: newKey, v: e.target.value})
      }}
      onBlur={() => updateHandler(i, {k: newKey, v: newValue})}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          updateHandler(i, {k: newKey, v: newValue})
        }
      }}
      ></input><CgRemove onClick={() => deleteHandler(i)} cursor="pointer"/>
    </div>
  );
}
