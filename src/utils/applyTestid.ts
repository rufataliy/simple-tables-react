type ApplyTestid = (env: string | undefined, testid: string) => { ["data-testid"]: string } | undefined;

export const applyTestid: ApplyTestid = (env, testid) => {
    if (env === "test") {
        return { "data-testid": testid }
    }
    return undefined
}
