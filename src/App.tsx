import { useState } from "react";
import { CopyBlock, a11yDark } from "react-code-blocks";
import "./App.css";
import { describeInstancesOptions } from "./assets/cli-docs/describeInstances";
import { Options } from "./cliInterface/cli";
import { CommandOption } from "./components/CommandOption";

export default function App() {
	const command = "aws ec2 describe-instances";
	const [commandOptions, setCommandOptions] = useState<CommandOption[]>([
		...Options[command].options.map((option) => ({
			k: option.key,
			v: "",
			d: option.description,
		})),
	]);

	const addOption = () => {
		setCommandOptions([
			...commandOptions,
			{ k: "--output", v: "xx", d: "The formatting style for command output." },
		]);
	};

	const deleteOption = (i: number) => {
		setCommandOptions(commandOptions.filter((_, index) => index !== i));
	};

	const updateOption = (i: number, newOption: CommandOption) => {
		setCommandOptions(
			commandOptions.map((option, index) => (index === i ? newOption : option)),
		);
	};

	return (
		<>
			<h1>AWS CLI Builder</h1>
			<p>
				Build your{" "}
				<a href="https://docs.aws.amazon.com/cli/latest/reference/index.html">
					{" "}
					AWS CLI
				</a>{" "}
				commands
			</p>
			<CopyBlock
				customStyle={{ textAlign: "left" }}
				text={`aws ec2 describe-instances
${spread(commandOptions)}`}
				language="shell"
				theme={a11yDark}
			/>
			{commandOptions.map((option, index) => (
				<CommandOption
					key={option.k}
					i={index}
					k={option.k}
					v={option.v}
					d={option.d}
					updateHandler={updateOption}
					deleteHandler={deleteOption}
					availableOptions={describeInstancesOptions}
				/>
			))}
			<button onClick={() => addOption()} type="button">
				Add Option
			</button>
		</>
	);
}

const spread = (commandOptions: CommandOption[]) => {
	return commandOptions.map((option) => `${option.k} ${option.v}`).join("\n");
};
