'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Mitroo API</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-1a73a8dc6d7c93fc42d80bbba7a0c60f9d0dbea06d320ae078e868beca7582b7b3df4b4711e76cd7c91664dc76897d00c3a4b6ad074770bc6614f054315f0874"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-1a73a8dc6d7c93fc42d80bbba7a0c60f9d0dbea06d320ae078e868beca7582b7b3df4b4711e76cd7c91664dc76897d00c3a4b6ad074770bc6614f054315f0874"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-1a73a8dc6d7c93fc42d80bbba7a0c60f9d0dbea06d320ae078e868beca7582b7b3df4b4711e76cd7c91664dc76897d00c3a4b6ad074770bc6614f054315f0874"' :
                                            'id="xs-controllers-links-module-AdminModule-1a73a8dc6d7c93fc42d80bbba7a0c60f9d0dbea06d320ae078e868beca7582b7b3df4b4711e76cd7c91664dc76897d00c3a4b6ad074770bc6614f054315f0874"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-1a73a8dc6d7c93fc42d80bbba7a0c60f9d0dbea06d320ae078e868beca7582b7b3df4b4711e76cd7c91664dc76897d00c3a4b6ad074770bc6614f054315f0874"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-1a73a8dc6d7c93fc42d80bbba7a0c60f9d0dbea06d320ae078e868beca7582b7b3df4b4711e76cd7c91664dc76897d00c3a4b6ad074770bc6614f054315f0874"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-1a73a8dc6d7c93fc42d80bbba7a0c60f9d0dbea06d320ae078e868beca7582b7b3df4b4711e76cd7c91664dc76897d00c3a4b6ad074770bc6614f054315f0874"' :
                                        'id="xs-injectables-links-module-AdminModule-1a73a8dc6d7c93fc42d80bbba7a0c60f9d0dbea06d320ae078e868beca7582b7b3df4b4711e76cd7c91664dc76897d00c3a4b6ad074770bc6614f054315f0874"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CartModule-220e13cc8bfa31460f7f9bea3138c8c19c949042eadb69deb3442bd44a19b945ad8ee98382ceca8725b77ac3a8cbe16fa929bb04ed083f6c4554a5e4967ad861"' : 'data-bs-target="#xs-controllers-links-module-CartModule-220e13cc8bfa31460f7f9bea3138c8c19c949042eadb69deb3442bd44a19b945ad8ee98382ceca8725b77ac3a8cbe16fa929bb04ed083f6c4554a5e4967ad861"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartModule-220e13cc8bfa31460f7f9bea3138c8c19c949042eadb69deb3442bd44a19b945ad8ee98382ceca8725b77ac3a8cbe16fa929bb04ed083f6c4554a5e4967ad861"' :
                                            'id="xs-controllers-links-module-CartModule-220e13cc8bfa31460f7f9bea3138c8c19c949042eadb69deb3442bd44a19b945ad8ee98382ceca8725b77ac3a8cbe16fa929bb04ed083f6c4554a5e4967ad861"' }>
                                            <li class="link">
                                                <a href="controllers/CartController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CartModule-220e13cc8bfa31460f7f9bea3138c8c19c949042eadb69deb3442bd44a19b945ad8ee98382ceca8725b77ac3a8cbe16fa929bb04ed083f6c4554a5e4967ad861"' : 'data-bs-target="#xs-injectables-links-module-CartModule-220e13cc8bfa31460f7f9bea3138c8c19c949042eadb69deb3442bd44a19b945ad8ee98382ceca8725b77ac3a8cbe16fa929bb04ed083f6c4554a5e4967ad861"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-220e13cc8bfa31460f7f9bea3138c8c19c949042eadb69deb3442bd44a19b945ad8ee98382ceca8725b77ac3a8cbe16fa929bb04ed083f6c4554a5e4967ad861"' :
                                        'id="xs-injectables-links-module-CartModule-220e13cc8bfa31460f7f9bea3138c8c19c949042eadb69deb3442bd44a19b945ad8ee98382ceca8725b77ac3a8cbe16fa929bb04ed083f6c4554a5e4967ad861"' }>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-3d2625b20716f06dba39a5399c7fa8e50be2f7399ccafc22df1d1dd0a82c9abe93ead873540fc64ccf12a2235db6547a26275ebf5cbd25a9842491d3e0ddbfb8"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-3d2625b20716f06dba39a5399c7fa8e50be2f7399ccafc22df1d1dd0a82c9abe93ead873540fc64ccf12a2235db6547a26275ebf5cbd25a9842491d3e0ddbfb8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-3d2625b20716f06dba39a5399c7fa8e50be2f7399ccafc22df1d1dd0a82c9abe93ead873540fc64ccf12a2235db6547a26275ebf5cbd25a9842491d3e0ddbfb8"' :
                                            'id="xs-controllers-links-module-CategoryModule-3d2625b20716f06dba39a5399c7fa8e50be2f7399ccafc22df1d1dd0a82c9abe93ead873540fc64ccf12a2235db6547a26275ebf5cbd25a9842491d3e0ddbfb8"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-3d2625b20716f06dba39a5399c7fa8e50be2f7399ccafc22df1d1dd0a82c9abe93ead873540fc64ccf12a2235db6547a26275ebf5cbd25a9842491d3e0ddbfb8"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-3d2625b20716f06dba39a5399c7fa8e50be2f7399ccafc22df1d1dd0a82c9abe93ead873540fc64ccf12a2235db6547a26275ebf5cbd25a9842491d3e0ddbfb8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-3d2625b20716f06dba39a5399c7fa8e50be2f7399ccafc22df1d1dd0a82c9abe93ead873540fc64ccf12a2235db6547a26275ebf5cbd25a9842491d3e0ddbfb8"' :
                                        'id="xs-injectables-links-module-CategoryModule-3d2625b20716f06dba39a5399c7fa8e50be2f7399ccafc22df1d1dd0a82c9abe93ead873540fc64ccf12a2235db6547a26275ebf5cbd25a9842491d3e0ddbfb8"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CourseModule.html" data-type="entity-link" >CourseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CourseModule-cb5a3b3c221ee9a6fde0033f46752e9a615fdc1e6a24284e006152ddcfe7ba88b4f5181131a6d2b1fc865d2feb88988e26620cbead3216a8c54ef98af1f9f3a8"' : 'data-bs-target="#xs-controllers-links-module-CourseModule-cb5a3b3c221ee9a6fde0033f46752e9a615fdc1e6a24284e006152ddcfe7ba88b4f5181131a6d2b1fc865d2feb88988e26620cbead3216a8c54ef98af1f9f3a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CourseModule-cb5a3b3c221ee9a6fde0033f46752e9a615fdc1e6a24284e006152ddcfe7ba88b4f5181131a6d2b1fc865d2feb88988e26620cbead3216a8c54ef98af1f9f3a8"' :
                                            'id="xs-controllers-links-module-CourseModule-cb5a3b3c221ee9a6fde0033f46752e9a615fdc1e6a24284e006152ddcfe7ba88b4f5181131a6d2b1fc865d2feb88988e26620cbead3216a8c54ef98af1f9f3a8"' }>
                                            <li class="link">
                                                <a href="controllers/CourseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CourseModule-cb5a3b3c221ee9a6fde0033f46752e9a615fdc1e6a24284e006152ddcfe7ba88b4f5181131a6d2b1fc865d2feb88988e26620cbead3216a8c54ef98af1f9f3a8"' : 'data-bs-target="#xs-injectables-links-module-CourseModule-cb5a3b3c221ee9a6fde0033f46752e9a615fdc1e6a24284e006152ddcfe7ba88b4f5181131a6d2b1fc865d2feb88988e26620cbead3216a8c54ef98af1f9f3a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CourseModule-cb5a3b3c221ee9a6fde0033f46752e9a615fdc1e6a24284e006152ddcfe7ba88b4f5181131a6d2b1fc865d2feb88988e26620cbead3216a8c54ef98af1f9f3a8"' :
                                        'id="xs-injectables-links-module-CourseModule-cb5a3b3c221ee9a6fde0033f46752e9a615fdc1e6a24284e006152ddcfe7ba88b4f5181131a6d2b1fc865d2feb88988e26620cbead3216a8c54ef98af1f9f3a8"' }>
                                        <li class="link">
                                            <a href="injectables/CourseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PaymentModule-b846c64cdd2c06c81bd764f705742ef73892535937d93984f3748f05108642860fdf46e334f77d9ab6b2ad79922f8976b5ce1b7a5df03f0efdf095cb72a59b23"' : 'data-bs-target="#xs-controllers-links-module-PaymentModule-b846c64cdd2c06c81bd764f705742ef73892535937d93984f3748f05108642860fdf46e334f77d9ab6b2ad79922f8976b5ce1b7a5df03f0efdf095cb72a59b23"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-b846c64cdd2c06c81bd764f705742ef73892535937d93984f3748f05108642860fdf46e334f77d9ab6b2ad79922f8976b5ce1b7a5df03f0efdf095cb72a59b23"' :
                                            'id="xs-controllers-links-module-PaymentModule-b846c64cdd2c06c81bd764f705742ef73892535937d93984f3748f05108642860fdf46e334f77d9ab6b2ad79922f8976b5ce1b7a5df03f0efdf095cb72a59b23"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentModule-b846c64cdd2c06c81bd764f705742ef73892535937d93984f3748f05108642860fdf46e334f77d9ab6b2ad79922f8976b5ce1b7a5df03f0efdf095cb72a59b23"' : 'data-bs-target="#xs-injectables-links-module-PaymentModule-b846c64cdd2c06c81bd764f705742ef73892535937d93984f3748f05108642860fdf46e334f77d9ab6b2ad79922f8976b5ce1b7a5df03f0efdf095cb72a59b23"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-b846c64cdd2c06c81bd764f705742ef73892535937d93984f3748f05108642860fdf46e334f77d9ab6b2ad79922f8976b5ce1b7a5df03f0efdf095cb72a59b23"' :
                                        'id="xs-injectables-links-module-PaymentModule-b846c64cdd2c06c81bd764f705742ef73892535937d93984f3748f05108642860fdf46e334f77d9ab6b2ad79922f8976b5ce1b7a5df03f0efdf095cb72a59b23"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfessionModule.html" data-type="entity-link" >ProfessionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProfessionModule-441c7ea9ddc8eadbbd94e07dea36d9b2d6c57a9d516d99425aedf976c90ec33a55875a2b3d8e4a06328b090b2dde238260d0624297e489b459381aeafb57af36"' : 'data-bs-target="#xs-controllers-links-module-ProfessionModule-441c7ea9ddc8eadbbd94e07dea36d9b2d6c57a9d516d99425aedf976c90ec33a55875a2b3d8e4a06328b090b2dde238260d0624297e489b459381aeafb57af36"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfessionModule-441c7ea9ddc8eadbbd94e07dea36d9b2d6c57a9d516d99425aedf976c90ec33a55875a2b3d8e4a06328b090b2dde238260d0624297e489b459381aeafb57af36"' :
                                            'id="xs-controllers-links-module-ProfessionModule-441c7ea9ddc8eadbbd94e07dea36d9b2d6c57a9d516d99425aedf976c90ec33a55875a2b3d8e4a06328b090b2dde238260d0624297e489b459381aeafb57af36"' }>
                                            <li class="link">
                                                <a href="controllers/ProfessionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfessionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProfessionModule-441c7ea9ddc8eadbbd94e07dea36d9b2d6c57a9d516d99425aedf976c90ec33a55875a2b3d8e4a06328b090b2dde238260d0624297e489b459381aeafb57af36"' : 'data-bs-target="#xs-injectables-links-module-ProfessionModule-441c7ea9ddc8eadbbd94e07dea36d9b2d6c57a9d516d99425aedf976c90ec33a55875a2b3d8e4a06328b090b2dde238260d0624297e489b459381aeafb57af36"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfessionModule-441c7ea9ddc8eadbbd94e07dea36d9b2d6c57a9d516d99425aedf976c90ec33a55875a2b3d8e4a06328b090b2dde238260d0624297e489b459381aeafb57af36"' :
                                        'id="xs-injectables-links-module-ProfessionModule-441c7ea9ddc8eadbbd94e07dea36d9b2d6c57a9d516d99425aedf976c90ec33a55875a2b3d8e4a06328b090b2dde238260d0624297e489b459381aeafb57af36"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SearchModule-1a7be88fd6355ec256118ac20d86e5991ee2b59c735786ec85745d8d53dffbce8c41ac0715622ec672bc17b2e48254afdd64753bc94497fddc09cd3f7bc5e7d4"' : 'data-bs-target="#xs-controllers-links-module-SearchModule-1a7be88fd6355ec256118ac20d86e5991ee2b59c735786ec85745d8d53dffbce8c41ac0715622ec672bc17b2e48254afdd64753bc94497fddc09cd3f7bc5e7d4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SearchModule-1a7be88fd6355ec256118ac20d86e5991ee2b59c735786ec85745d8d53dffbce8c41ac0715622ec672bc17b2e48254afdd64753bc94497fddc09cd3f7bc5e7d4"' :
                                            'id="xs-controllers-links-module-SearchModule-1a7be88fd6355ec256118ac20d86e5991ee2b59c735786ec85745d8d53dffbce8c41ac0715622ec672bc17b2e48254afdd64753bc94497fddc09cd3f7bc5e7d4"' }>
                                            <li class="link">
                                                <a href="controllers/SearchController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SearchModule-1a7be88fd6355ec256118ac20d86e5991ee2b59c735786ec85745d8d53dffbce8c41ac0715622ec672bc17b2e48254afdd64753bc94497fddc09cd3f7bc5e7d4"' : 'data-bs-target="#xs-injectables-links-module-SearchModule-1a7be88fd6355ec256118ac20d86e5991ee2b59c735786ec85745d8d53dffbce8c41ac0715622ec672bc17b2e48254afdd64753bc94497fddc09cd3f7bc5e7d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SearchModule-1a7be88fd6355ec256118ac20d86e5991ee2b59c735786ec85745d8d53dffbce8c41ac0715622ec672bc17b2e48254afdd64753bc94497fddc09cd3f7bc5e7d4"' :
                                        'id="xs-injectables-links-module-SearchModule-1a7be88fd6355ec256118ac20d86e5991ee2b59c735786ec85745d8d53dffbce8c41ac0715622ec672bc17b2e48254afdd64753bc94497fddc09cd3f7bc5e7d4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SearchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecializationModule.html" data-type="entity-link" >SpecializationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SpecializationModule-e94496d539af606bea860fbf3f3edf3bebd1f48107bf7cb31097f97b741c59bd91c436e66df1853c416891537ae54424edf44c6aadaf8c0f7821d11abc188d57"' : 'data-bs-target="#xs-controllers-links-module-SpecializationModule-e94496d539af606bea860fbf3f3edf3bebd1f48107bf7cb31097f97b741c59bd91c436e66df1853c416891537ae54424edf44c6aadaf8c0f7821d11abc188d57"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SpecializationModule-e94496d539af606bea860fbf3f3edf3bebd1f48107bf7cb31097f97b741c59bd91c436e66df1853c416891537ae54424edf44c6aadaf8c0f7821d11abc188d57"' :
                                            'id="xs-controllers-links-module-SpecializationModule-e94496d539af606bea860fbf3f3edf3bebd1f48107bf7cb31097f97b741c59bd91c436e66df1853c416891537ae54424edf44c6aadaf8c0f7821d11abc188d57"' }>
                                            <li class="link">
                                                <a href="controllers/SpecializationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecializationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SpecializationModule-e94496d539af606bea860fbf3f3edf3bebd1f48107bf7cb31097f97b741c59bd91c436e66df1853c416891537ae54424edf44c6aadaf8c0f7821d11abc188d57"' : 'data-bs-target="#xs-injectables-links-module-SpecializationModule-e94496d539af606bea860fbf3f3edf3bebd1f48107bf7cb31097f97b741c59bd91c436e66df1853c416891537ae54424edf44c6aadaf8c0f7821d11abc188d57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpecializationModule-e94496d539af606bea860fbf3f3edf3bebd1f48107bf7cb31097f97b741c59bd91c436e66df1853c416891537ae54424edf44c6aadaf8c0f7821d11abc188d57"' :
                                        'id="xs-injectables-links-module-SpecializationModule-e94496d539af606bea860fbf3f3edf3bebd1f48107bf7cb31097f97b741c59bd91c436e66df1853c416891537ae54424edf44c6aadaf8c0f7821d11abc188d57"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpecializationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecializationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-9a5aa4fd847bfa2706032e9265fff82868154cfcdfa9a0f6c6d78684e4778bb35f338b540591f318045b764748f94287ad3788b95810294e7c13ac3e6bc4fa5c"' : 'data-bs-target="#xs-controllers-links-module-UserModule-9a5aa4fd847bfa2706032e9265fff82868154cfcdfa9a0f6c6d78684e4778bb35f338b540591f318045b764748f94287ad3788b95810294e7c13ac3e6bc4fa5c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-9a5aa4fd847bfa2706032e9265fff82868154cfcdfa9a0f6c6d78684e4778bb35f338b540591f318045b764748f94287ad3788b95810294e7c13ac3e6bc4fa5c"' :
                                            'id="xs-controllers-links-module-UserModule-9a5aa4fd847bfa2706032e9265fff82868154cfcdfa9a0f6c6d78684e4778bb35f338b540591f318045b764748f94287ad3788b95810294e7c13ac3e6bc4fa5c"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-9a5aa4fd847bfa2706032e9265fff82868154cfcdfa9a0f6c6d78684e4778bb35f338b540591f318045b764748f94287ad3788b95810294e7c13ac3e6bc4fa5c"' : 'data-bs-target="#xs-injectables-links-module-UserModule-9a5aa4fd847bfa2706032e9265fff82868154cfcdfa9a0f6c6d78684e4778bb35f338b540591f318045b764748f94287ad3788b95810294e7c13ac3e6bc4fa5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-9a5aa4fd847bfa2706032e9265fff82868154cfcdfa9a0f6c6d78684e4778bb35f338b540591f318045b764748f94287ad3788b95810294e7c13ac3e6bc4fa5c"' :
                                        'id="xs-injectables-links-module-UserModule-9a5aa4fd847bfa2706032e9265fff82868154cfcdfa9a0f6c6d78684e4778bb35f338b540591f318045b764748f94287ad3788b95810294e7c13ac3e6bc4fa5c"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddCartDto.html" data-type="entity-link" >AddCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCategoryDto.html" data-type="entity-link" >AddCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCourseDto.html" data-type="entity-link" >AddCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddProfessionDto.html" data-type="entity-link" >AddProfessionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWishlist.html" data-type="entity-link" >AddWishlist</a>
                            </li>
                            <li class="link">
                                <a href="classes/AWSService.html" data-type="entity-link" >AWSService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAdminDto.html" data-type="entity-link" >CreateAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLicenseDto.html" data-type="entity-link" >CreateLicenseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePolicyDto.html" data-type="entity-link" >CreatePolicyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReviewerDetailDto.html" data-type="entity-link" >CreateReviewerDetailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateScheduleDto.html" data-type="entity-link" >CreateScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSpecilizationDto.html" data-type="entity-link" >CreateSpecilizationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserByRoleDto.html" data-type="entity-link" >GetUserByRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PolicyCourse.html" data-type="entity-link" >PolicyCourse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCourseDto.html" data-type="entity-link" >UpdateCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReviewerDetailDto.html" data-type="entity-link" >UpdateReviewerDetailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateScheduleDto.html" data-type="entity-link" >UpdateScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyUserDto.html" data-type="entity-link" >VerifyUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyUserDto-1.html" data-type="entity-link" >VerifyUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});