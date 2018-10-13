import pytest
from webApp import app


@pytest.fixture(scope='session')
def client():
    print('init client')
    client = app.test_client()
    yield client
    print('close client')
