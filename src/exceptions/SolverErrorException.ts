export class SolverErrorException extends Error {

	public cause: any;

	constructor(message: string, cause: any) {
		super(message);
		this.cause = cause;
	}
}
