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
                    <a href="index.html" data-type="index-link">blog documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' :
                                            'id="xs-controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' :
                                        'id="xs-injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-96e0ccc95dc6d9a702767aed9f321657dcb8a1fd7b72b56cb10f5379e6c415adf4b4d4a8c5c42f7802c8cfae5563cb1b02da77f2a12094457f51007e97497998"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-96e0ccc95dc6d9a702767aed9f321657dcb8a1fd7b72b56cb10f5379e6c415adf4b4d4a8c5c42f7802c8cfae5563cb1b02da77f2a12094457f51007e97497998"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-96e0ccc95dc6d9a702767aed9f321657dcb8a1fd7b72b56cb10f5379e6c415adf4b4d4a8c5c42f7802c8cfae5563cb1b02da77f2a12094457f51007e97497998"' :
                                            'id="xs-controllers-links-module-AuthModule-96e0ccc95dc6d9a702767aed9f321657dcb8a1fd7b72b56cb10f5379e6c415adf4b4d4a8c5c42f7802c8cfae5563cb1b02da77f2a12094457f51007e97497998"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-96e0ccc95dc6d9a702767aed9f321657dcb8a1fd7b72b56cb10f5379e6c415adf4b4d4a8c5c42f7802c8cfae5563cb1b02da77f2a12094457f51007e97497998"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-96e0ccc95dc6d9a702767aed9f321657dcb8a1fd7b72b56cb10f5379e6c415adf4b4d4a8c5c42f7802c8cfae5563cb1b02da77f2a12094457f51007e97497998"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-96e0ccc95dc6d9a702767aed9f321657dcb8a1fd7b72b56cb10f5379e6c415adf4b4d4a8c5c42f7802c8cfae5563cb1b02da77f2a12094457f51007e97497998"' :
                                        'id="xs-injectables-links-module-AuthModule-96e0ccc95dc6d9a702767aed9f321657dcb8a1fd7b72b56cb10f5379e6c415adf4b4d4a8c5c42f7802c8cfae5563cb1b02da77f2a12094457f51007e97497998"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-accdf125aaf5c493c045c6e8083f21515e6b3fc62008a5d4cd7d8cda4e617c059c9ccc2ec05de9132353e0c30eb5159927ea37a6a863718249b6ab15749278ef"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-accdf125aaf5c493c045c6e8083f21515e6b3fc62008a5d4cd7d8cda4e617c059c9ccc2ec05de9132353e0c30eb5159927ea37a6a863718249b6ab15749278ef"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-accdf125aaf5c493c045c6e8083f21515e6b3fc62008a5d4cd7d8cda4e617c059c9ccc2ec05de9132353e0c30eb5159927ea37a6a863718249b6ab15749278ef"' :
                                            'id="xs-controllers-links-module-PostsModule-accdf125aaf5c493c045c6e8083f21515e6b3fc62008a5d4cd7d8cda4e617c059c9ccc2ec05de9132353e0c30eb5159927ea37a6a863718249b6ab15749278ef"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-accdf125aaf5c493c045c6e8083f21515e6b3fc62008a5d4cd7d8cda4e617c059c9ccc2ec05de9132353e0c30eb5159927ea37a6a863718249b6ab15749278ef"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-accdf125aaf5c493c045c6e8083f21515e6b3fc62008a5d4cd7d8cda4e617c059c9ccc2ec05de9132353e0c30eb5159927ea37a6a863718249b6ab15749278ef"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-accdf125aaf5c493c045c6e8083f21515e6b3fc62008a5d4cd7d8cda4e617c059c9ccc2ec05de9132353e0c30eb5159927ea37a6a863718249b6ab15749278ef"' :
                                        'id="xs-injectables-links-module-PostsModule-accdf125aaf5c493c045c6e8083f21515e6b3fc62008a5d4cd7d8cda4e617c059c9ccc2ec05de9132353e0c30eb5159927ea37a6a863718249b6ab15749278ef"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-317ae096c12ca970f0ccca832e916408eca0b3fc7e329b94cd118627f6cc7008a2f603456f8af0f941ef564ce6d82c5d60d12d809d8f35f7e157e23f356a976f"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-317ae096c12ca970f0ccca832e916408eca0b3fc7e329b94cd118627f6cc7008a2f603456f8af0f941ef564ce6d82c5d60d12d809d8f35f7e157e23f356a976f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-317ae096c12ca970f0ccca832e916408eca0b3fc7e329b94cd118627f6cc7008a2f603456f8af0f941ef564ce6d82c5d60d12d809d8f35f7e157e23f356a976f"' :
                                            'id="xs-controllers-links-module-UsersModule-317ae096c12ca970f0ccca832e916408eca0b3fc7e329b94cd118627f6cc7008a2f603456f8af0f941ef564ce6d82c5d60d12d809d8f35f7e157e23f356a976f"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-317ae096c12ca970f0ccca832e916408eca0b3fc7e329b94cd118627f6cc7008a2f603456f8af0f941ef564ce6d82c5d60d12d809d8f35f7e157e23f356a976f"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-317ae096c12ca970f0ccca832e916408eca0b3fc7e329b94cd118627f6cc7008a2f603456f8af0f941ef564ce6d82c5d60d12d809d8f35f7e157e23f356a976f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-317ae096c12ca970f0ccca832e916408eca0b3fc7e329b94cd118627f6cc7008a2f603456f8af0f941ef564ce6d82c5d60d12d809d8f35f7e157e23f356a976f"' :
                                        'id="xs-injectables-links-module-UsersModule-317ae096c12ca970f0ccca832e916408eca0b3fc7e329b94cd118627f6cc7008a2f603456f8af0f941ef564ce6d82c5d60d12d809d8f35f7e157e23f356a976f"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
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
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUser.html" data-type="entity-link" >CreateUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
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