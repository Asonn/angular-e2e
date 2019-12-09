// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4.Models;
using System.Collections.Generic;

namespace is4
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> Ids =>
            new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };


        public static IEnumerable<ApiResource> Apis =>
            new ApiResource[]
            {
                new ApiResource("gameapi", "Best Game API ever")
            };


        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                // SPA client using code flow + pkce
                new Client
                {
                    ClientId = "angulah",
                    ClientName = "Game Client",
                    ClientUri = "http://identityserver.io",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    RequirePkce = true,
                    RequireClientSecret = false,
					AllowAccessTokensViaBrowser = true,
					RedirectUris = { "http://localhost:4200/auth-callback" },

                    //RedirectUris =
                    //{
                    //    "http://localhost:5002/index.html",
                    //    "http://localhost:5002/callback.html",
                    //    "http://localhost:5002/silent.html",
                    //    "http://localhost:5002/popup.html",
                    //},

                    PostLogoutRedirectUris = { "http://localhost:4200/index.html" },
                    AllowedCorsOrigins = { "http://localhost:4200" },

                    AllowedScopes = { "openid", "profile", "gameapi" }
                }
            };
    }
}
