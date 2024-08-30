/* 
optionKey: cli option key
isBoolean: if the option is boolean
description: description of the option
*/
export type describeInstancesOption = {
  optionKey: string;
  isBoolean: boolean;
  description: string;
}

export const describeInstancesOptions: describeInstancesOption[] = [
  {
    optionKey: '--instance-ids',
    isBoolean: false,
    description: 'One or more instance IDs.'
  },
  {
    optionKey: '--filters',
    isBoolean: false,
    description: 'One or more filters.'
  },
  {
    optionKey: '--dry-run',
    isBoolean: true,
    description: 'Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.'
  },
  {
    optionKey: '--max-results',
    isBoolean: false,
    description: 'The maximum number of results to return in a single call.'
  },
  {
    optionKey: '--next-token',
    isBoolean: false,
    description: 'The token to retrieve the next page of results.'
  },
  {
    optionKey: '--page-size',
    isBoolean: false,
    description: 'The number of items to return in a single page of output.'
  },
  {
    optionKey: '--query',
    isBoolean: false,
    description: 'A JMESPath query to filter the results.'
  },
  {
    optionKey: '--output',
    isBoolean: false,
    description: 'The formatting style for command output.'
  },
  {
    optionKey: '--no-cli-pager',
    isBoolean: true,
    description: 'Disables displaying the command output using the pager.'
  },
  {
    optionKey: '--cli-input-json',
    isBoolean: false,
    description: 'Performs service operation based on the JSON string provided. The JSON string follows the format provided by --generate-cli-skeleton.'
  },
  {
    optionKey: '--generate-cli-skeleton',
    isBoolean: false,
    description: 'Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value input, prints a sample input JSON that can be used as an argument for --cli-input-json.'
  },
  {
    optionKey: '--cli-auto-prompt',
    isBoolean: true,
    description: 'Automatically prompt for CLI input parameters.'
  },
  {
    optionKey: '--starting-token',
    isBoolean: false,
    description: 'A token to specify where to start paginating. This is the NextToken from a previously truncated response.'
  }
]
