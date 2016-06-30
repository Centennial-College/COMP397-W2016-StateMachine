module objects {
    // Scene Class
    export abstract class Scene extends createjs.Container {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++
        // Add game objects to my scene in this method
        public abstract start(): void;

        // Update game objects in my scene
        public abstract update(): void;
    }
}