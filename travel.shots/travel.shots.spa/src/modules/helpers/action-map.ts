/**
 * Helper method to convert Action types to their corresponding parameters.
 */
type ActionMap<Type extends { [index: string]: object }> = {
    [Property in keyof Type] : Type[Property] extends undefined | null
    ? {
        type: Property
      }
    : {
        type: Property,
        payload: Type[Property]
      }
};

export type { ActionMap };