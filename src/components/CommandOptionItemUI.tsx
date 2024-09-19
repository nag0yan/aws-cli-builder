import React from "react";
import { CgRemove } from "react-icons/cg";
import type { CommandOptionItem } from "../schema";

export const CommandOptionItemUI = (props: CommandOptionItem) => {
	const [newOption, setNewOption] = React.useState({
		name: props.commandOption.name,
		value: props.commandOption.value,
	});
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<select
				value={newOption.name}
				onChange={(e) => {
					setNewOption({ ...newOption, name: e.target.value });
				}}
			>
				<option value={newOption.name}>{newOption.name}</option>
			</select>
			<input
				value={newOption.value}
				onChange={(e) => {
					setNewOption({ ...newOption, value: e.target.value });
				}}
			/>
			<CgRemove cursor="pointer" />
		</div>
	);
};
