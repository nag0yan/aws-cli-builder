import { useState } from "react";
import { CopyBlock, a11yDark } from "react-code-blocks";
import "./App.css";
import { CommandOptionItemUI } from "./components/CommandOptionItemUI";
import type { Command, CommandOptionItem } from "./schema";

export default function App() {
	const initCommand: Command = {
		service: "ec2",
		name: "describe-instances",
		description: "Describes one or more of your instances.",
		options: [
			{
				key: "1",
				commandOption: {
					name: "instance-ids",
					value: "i-1234567890abcdef0",
					required: false,
					description: "One or more instance IDs. Seperated by spaces.",
				},
			},
		],
	};
	const [command] = useState<Command>(initCommand);

	return (
		<>
			<h1>AWS CLI Builder</h1>
			<p>
				{" "}
				Build your{" "}
				<a href="https://docs.aws.amazon.com/cli/latest/reference/index.html">
					AWS CLI
				</a>{" "}
				commands.{" "}
			</p>
			<CopyBlock
				customStyle={{ textAlign: "left" }}
				text={`aws ${command.service} ${command.name}
${spread(command.options)}`}
				language="shell"
				theme={a11yDark}
			/>
			{command.options.map((item) => (
				<CommandOptionItemUI
					key={item.key}
					commandOption={item.commandOption}
				/>
			))}
			<button type="button">Add Option</button>
		</>
	);
}

const spread = (items: CommandOptionItem[]) => {
	return items
		.map((item) => `${item.commandOption.name} ${item.commandOption.value}`)
		.join("\n");
};
