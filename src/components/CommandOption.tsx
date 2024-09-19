import React from "react";
import { CgRemove } from "react-icons/cg";
import type { describeInstancesOption } from "../assets/cli-docs/describeInstances";

export type CommandOption = {
	k: string;
	v: string | undefined;
	d: string;
};

export interface CommandOptionProps {
	i: number;
	k: string;
	v: string | undefined;
	d: string;
	deleteHandler: (i: number) => void;
	updateHandler: (i: number, option: CommandOption) => void;
	availableOptions: describeInstancesOption[];
}

export const CommandOption = ({
	i,
	k,
	v,
	d,
	deleteHandler,
	updateHandler,
	availableOptions,
}: CommandOptionProps) => {
	const [newKey, setNewKey] = React.useState(k);
	const [newValue, setNewValue] = React.useState(v);
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<select
				value={newKey}
				onChange={(e) => {
					setNewKey(e.target.value);
					updateHandler(i, { k: e.target.value, v: newValue, d: d });
				}}
			>
				{availableOptions.map((option) => (
					<option
						key={option.optionKey}
						value={option.optionKey}
						title={option.description}
					>
						{option.optionKey}
					</option>
				))}
			</select>
			<input
				value={newValue}
				onChange={(e) => {
					setNewValue(e.target.value);
					updateHandler(i, { k: newKey, v: e.target.value, d: d });
				}}
				onBlur={() => updateHandler(i, { k: newKey, v: newValue, d: d })}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						updateHandler(i, { k: newKey, v: newValue, d: d });
					}
				}}
			/>
			<CgRemove onClick={() => deleteHandler(i)} cursor="pointer" />
		</div>
	);
};
