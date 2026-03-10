declare global {
    /**
     *  Writes a messages from console at warning level.
     */
    function caution(...data: any[]): void;

    /**
     *  Writes a message from console at warning level.
     */
    function caution(message: string): void;

    /**
     *  Writes a messages from console at info level.
     */
    function notice(...data: any[]): void;

    /**
     *  Writes a message from console at info level.
     */
    function notice(message: string): void;

    /**
     *  Writes a messages from console at critical level.
     */
    function report(...data: any[]): void;

    /**
     *  Writes a message from console at critical level.
     */
    function report(message: string): void;

    /**
     *  Writes a messages from console at trace level.
     */
    function trace(...data: any[]): void;

    /**
     *  Writes a message from console at trace level.
     */
    function trace(message: string): void;

    /**
     *  Writes a messages from console at log level.
     */
    function verbose(...data: any[]): void;

    /**
     *  Writes a message from console at log level.
     */
    function write(...data: any[]): void;

    /**
     *  Writes a message from console at log level.
     */
    function write(message: string): void;
}

export { }
