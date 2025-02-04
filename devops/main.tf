resource "digitalocean_project" "project" {
  name        = "my-sample-project"
  description = "description"
  environment = "development"
  purpose     = "template-app"
}

resource "digitalocean_container_registry" "app_registry" {
  name                   = "fullcycle-app"
  subscription_tier_slug = "starter"
}