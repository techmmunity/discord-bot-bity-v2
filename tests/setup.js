"use strict";
jest.mock("typeorm-transactional-cls-hooked", () => ({
    Transactional: () => () => ({}),
    BaseRepository: class {
    },
}));
//# sourceMappingURL=setup.js.map